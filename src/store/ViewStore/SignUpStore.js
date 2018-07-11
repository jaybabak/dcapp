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
  submitForm = () => {


    const userName = encodeURIComponent(this.name);
    const userEmail = encodeURIComponent(this.email);
    const userPassword = encodeURIComponent(this.password);
    const formData = `name=${userName}&email=${userEmail}&password=${userPassword}`;

    console.log('YUP');

    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';


    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.errors = errors;
        console.log(xhr);
        // set a message
        // localStorage.setItem('successMessage', xhr.response.message);

        // redirect user after sign up to login page
        // this.props.history.push('/login');
      } else {
        // failure

        // errors = xhr.response.errors ? xhr.response.errors : {};
        // errors.summary = xhr.response.message;
        console.log(this);

        this.errors = errors;
      }
    });

    xhr.send(formData);



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


  autorun = () => {
    console.log(this);
  }
}


export default SignUpStore;
