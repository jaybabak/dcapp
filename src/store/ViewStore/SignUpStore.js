import { observable, action, computed, autorun } from "mobx";
import { View, Alert, TextInput } from 'react-native';
import { Item, Input, Icon, Form, Toast } from "native-base";

class SignUpStore {
  @observable pojo = {
    errors: {},
    user: {
      email: '',
      name: '',
      lastName: '',
      password: ''
    }
  };

  //unique user information
  @observable name = '';
  @observable lastName = '';
  @observable email = '';
  @observable password = '';

  //other user information
  @observable addressName = '';
  @observable addressType = '';
  @observable street = '';
  @observable buildingName = '';
  @observable floor = '';
  @observable additionalDirections = '';
  @observable mobileNumber = '';
  @observable lat = '';
  @observable long = '';
  @observable preferredAddress = true;

  //validationForm
  @observable errors = {};
  @observable isValid = false;

  //validation of Fields

  @observable nameValid = false;
  @observable lastNameValid = false;
  @observable emailValid = false;
  @observable passwordValid = false;
  @observable addressNameValid = false;
  @observable addressTypeValid = false;
  @observable streetValid = false;
  @observable buildingNameValid = false;
  @observable floorValid = false;
  @observable additionalDirectionsValid = false;
  @observable mobileNumberValid = false;



  @action
  nameChange = (event) => {
		this.name = event;
  }

  @action
  lastNameChange = (event) => {
		this.lastName = event;
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
  addressNameChange = (event) => {
		this.addressName = event;
  }

  @action
  addressTypeChange = (event) => {
		this.addressType = event;
  }

  @action
  submitForm = (navi) => {



    const userName = encodeURIComponent(this.name);
    const userLastName = encodeURIComponent(this.lastName);
    const userEmail = encodeURIComponent(this.email);
    const userPassword = encodeURIComponent(this.password);
    const addressName = encodeURIComponent(this.addressName);
    const addressType = encodeURIComponent(this.addressType);

    const formData = `name=${userName}&lastName=${userLastName}&email=${userEmail}&password=${userPassword}&addressName=${addressName}&addressType=${addressType}`;

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

    // postData(`https://dcapp-backend.herokuapp.com/auth/signup`, '') // staging dev backend sign up end point
    postData(`http://localhost:5000/auth/signup`, '') //local dev backend sign up end point
    .then((data) => {
      // console.log(data);

      if(data.success == true){
        this.isValid = true;
        navi.navigate("Login");
        this.clearStore();
        // this.isValid = false;
      }else {


        this.errors = data.errors;
        console.log(data);
        this.emailValid = data.errors.emailInvalid;
        this.nameValid = data.errors.nameInvalid;
        this.lastNameValid = data.errors.lastNameInvalid;
        this.passwordValid = data.errors.passwordInvalid;
        // console.log(data.errors);
        Alert.alert(
        "Oops! Something Isn't Right",
        'Pleaes check the form and try again',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => {
        		// Toast.show({
        		// 	 text: 'Signup Completed ' + this.name+ '!',
        		// 	 buttonText: "Ok"
        		//  })
        		// console.log(text.target);
        	}},
        ],
          { cancelable: false }
        )
      }

    }) // JSON from `response.json()` call
    .catch(error => console.error(error));

  }

  @action
  clearStore() {
    this.email = "";
    this.isValid = false;
    this.name = "";
    this.lastName = "";
    this.password = "";
    this.errors = {};
  }

  @computed get validateForm(){
    return this.isValid;
  }


  autorun = () => {
    // console.log(this.errors);
  }
}


export default SignUpStore;
