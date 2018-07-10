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

  @action
  textChange = (field) => (event) => {

    // console.log(field);
    // console.log(event);
    var x = this.field;
    // const user = this.pojo.user;

    x = event;

    // user[field] = event;

		// console.log(user);
  }


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

    Alert.alert(
	  'Consumer Regisration',
	  'Are you sure you would like to submit this as a consumer?',
	  [
	    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
	    {text: 'OK', onPress: () => {
				Toast.show({
					 text: 'Signup Completed ' + this.name+ '!',
					 buttonText: "Ok"
				 })
				// console.log(text.target);
			}},
	  ],
		  { cancelable: false }
		)

  }


  autorun = () => {
    console.log(this);
  }
}


export default SignUpStore;
