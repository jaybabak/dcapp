import { observable, action } from "mobx";
import { observer, inject } from "mobx-react/native";
import { View, Alert, TextInput, AsyncStorage } from 'react-native';
import { Item, Input, Icon, Form, Toast } from "native-base";
import Auth from '../../modules/Auth';


class LoginStore {

  @observable email = "";
  @observable password = "";
  @observable isValid = false;
  @observable emailError = "";
  @observable errors = {};
  @observable passwordError = "";
  @observable successMessage = "";
  @observable storedMessage = AsyncStorage.getItem('successMessage');

  if (storedMessage) {
    successMessage = storedMessage;
    AsyncStorage.removeItem('successMessage');
  }



  @action
  emailOnChange(id) {
    this.email = id;
    this.validateEmail();
    // console.log(this.email);
  }

  @action
  validateEmail() {
    const emailPatter = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const required = this.email ? undefined : "Required";
    this.emailError = required
      ? required
      : emailPatter.test(this.email) ? undefined : "Invalid email address";
  }

  @action
  passwordOnChange(pwd) {
    this.password = pwd;
    this.validatePassword();
    // console.log(this.password);
  }

  @action
  validatePassword() {
    const alphaNumeric = /[^a-zA-Z0-9 ]/i.test(this.password)
      ? "Only alphanumeric characters"
      : undefined;
    const maxLength =
      this.password.length > 15 ? "Must be 15 characters or less" : undefined;
    const minLength =
      this.password.length < 8 ? "Must be 8 characters or more" : undefined;
    const required = this.password ? undefined : "Required";
    this.passwordError = required
      ? required
      : alphaNumeric ? alphaNumeric : maxLength ? maxLength : minLength;
  }

  @action
  validateForm() {
    if (this.emailError === undefined && this.passwordError === undefined) {
      this.isValid = true;
    }
  }


  @action
  submitForm = (navi, homeStore) => {


    const userEmail = encodeURIComponent(this.email);
    const userPassword = encodeURIComponent(this.password);
    const formData = `&email=${userEmail}&password=${userPassword}`;

    // console.log('YUP');

    const postData = (url = ``, data = {}) => {
      // Default options are marked with *
      return fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            // mode: "cors", // no-cors, cors, *same-origin
            // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: "same-origin", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            // redirect: "follow", // manual, *follow, error
            // referrer: "no-referrer", // no-referrer, *client
            body: formData, // body data type must match "Content-Type" header
        })
      .then(response => response.json()) // parses response to JSON
      .catch(error => console.error(`Fetch Error =\n`, error));
    };

    postData(`http://localhost:5000/auth/login`, '')
    .then((data) => {
      console.log(data);

      if(data.success == true){

        homeStore.setName(data.user.name);


        homeStore.authenticateUser(data.token);
        console.log(homeStore.toggleAuthenticateStatus());
        console.log(homeStore.authenticated);

        Alert.alert(
          'Logged in successfully!',
          'Welcome ' + homeStore.getName,
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => {
              // console.log(text.target);
            }},
          ],
            { cancelable: false }
        )

        // Toast.show({
  			//   text: 'Logged in successfully! Welcome ' + this.name+ '!',
  		  // })

        this.clearStore();


        // home.setName(data.user.name);

        navi.navigate("Home");





      //   // this.isValid = false;
    }else{

      // console.log(AsyncStorage.getItem('token'));

      Toast.show({
        text: 'Oops! Incorrect username or password.',
        position: 'bottom'
      })
    }
    }) // JSON from `response.json()` call
    .catch(error => Toast.show({
          text: 'Sorry, something is not right!',
          position: 'bottom'
        }));



  }

  @action
  clearStore() {
    this.email = "";
    this.isValid = false;
    this.emailError = "";
    this.password = "";
    this.passwordError = "";
    this.errors = "";
  }
}

export default LoginStore;
