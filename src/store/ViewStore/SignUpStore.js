import { observable, action, computed, autorun } from "mobx";
import { View, Alert, TextInput } from 'react-native';

class SignUpStore {
  @observable pojo = {
    errors: {},
    user: {
      email: '',
      name: '',
      password: ''
    }
  };

  @action
  textChange = (field) => (event) => {

    // console.log(field);
    // console.log(event);
    const user = this.pojo.user;
		user[field] = event;

		// console.log(user);
  }

  @action
  submitForm = () => {

    Alert.alert(
	  'Registration Nearly Complete!',
	  'Are you sure you would like to submit this as a consumer?',
	  [
	    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
	    {text: 'OK', onPress: () => {
				Toast.show({
					 text: 'Signup Completed ' + this.user.name + '!',
					 buttonText: "Ok"
				 })
				// console.log(text.target);
			}},
	  ],
		  { cancelable: false }
		)

  }


  autorun = () => {
    console.log(this.pojo);
  }
}


export default SignUpStore;
