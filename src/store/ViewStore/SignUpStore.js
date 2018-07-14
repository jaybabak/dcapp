import { observable, action, computed, autorun } from "mobx";
import { View, Alert, TextInput } from 'react-native';
import { Item, Input, Icon, Form, Toast } from "native-base";

class SignUpStore {
  @observable pojo = {
    errors: {},
    user: {
      email: '',
      name: '',
      password: ''
    }
  };

  @observable name = '';
  @observable email = '';
  @observable password = '';
  @observable errors = {};
  @observable isValid = false;

  @action
  nameChange = (event) => {
		this.name = event;
  }

  @action
  emailChange = (event) => {
		this.email = event;
  }

  @action
  pwdChange = (event) => {
		this.password = event;
  }

  @action
  submitForm = (navi) => {


    const userName = encodeURIComponent(this.name);
    const userEmail = encodeURIComponent(this.email);
    const userPassword = encodeURIComponent(this.password);
    const formData = `name=${userName}&email=${userEmail}&password=${userPassword}`;

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

    postData(`http://localhost:5000/auth/signup`, '')
    .then((data) => {
      console.log(data);

      if(data.success == true){
        this.isValid = true;
        // this.clearStore();
        console.log(this.isValid);
        navi.navigate("Home");
        // this.isValid = false;
      }

    }) // JSON from `response.json()` call
    .catch(error => console.error(error));

    // Alert.alert(
	  // 'Consumer Regisration',
	  // 'Are you sure you would like to submit this as a consumer?',
	  // [
	  //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
	  //   {text: 'OK', onPress: () => {
		// 		Toast.show({
		// 			 text: 'Signup Completed ' + this.name+ '!',
		// 			 buttonText: "Ok"
		// 		 })
		// 		// console.log(text.target);
		// 	}},
	  // ],
		//   { cancelable: false }
		// )

  }

  @action
  clearStore() {
    this.email = "";
    this.isValid = false;
    this.name = "";
    this.password = "";
    this.errors = {};
  }

  @computed get validateForm(){
    return this.isValid;
  }


  autorun = () => {
    console.log(this);
  }
}


export default SignUpStore;
