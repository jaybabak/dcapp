import { observable, action } from "mobx";
import { observer, inject } from "mobx-react/native";
import { View, Alert, TextInput, AsyncStorage, Keyboard } from 'react-native';
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

    /* PARAMETERS
    **
    * navi -> the navigation paramater provided as property so that user can be redirected to homepage/dashboard after
    * homeStore -> passing in a property of the HomeStore so that we can set the name etc.. globally
    */

    const userEmail = encodeURIComponent(this.email);
    const userPassword = encodeURIComponent(this.password);
    const formData = `&email=${userEmail}&password=${userPassword}`;

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
      .catch(error => console.log(`Fetch Error =\n`, error));
    };

    // postData(`https://dcapp-backend.herokuapp.com/auth/login`, '') ///staging domain backend
    postData(`http://localhost:5000/auth/login`, '')  //local dev backend
    .then((data) => {
      // console.log(data);

      if(data.success == true){

        homeStore.setName(data.user.name);
        homeStore.authenticateUser(data.token);
        homeStore.toggleAuthenticateStatus();

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

        this.clearStore();

        navi.navigate("Home");
      //   // this.isValid = false;
    }else{
      // console.log(AsyncStorage.getItem('token'));
      Toast.show({
        text: 'Oops! Incorrect username or password.',
        position: 'bottom',
        buttonText: "Okay",
        duration: 5000,
        buttonTextStyle: { color: "#FFFFFF" },
        buttonStyle: { backgroundColor: "#2CACFB" }
      })
    }
    }) // JSON from `response.json()` call
    .catch(error => Toast.show({
          text: 'Something is not right..check your connection!',
          position: 'bottom',
          duration: 3200,
          textStyle: { color: "#5ECFE5" }
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

  autorun = () => {
    console.log(this);
  }
}

export default LoginStore;
