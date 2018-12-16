import { observable, action, computed, autorun } from "mobx";
import { View, Alert, TextInput } from 'react-native';

class CountersStore {
  @observable businessName = '';
  @observable businessDescription = '';
  @observable businessAddress = '';
  @observable businessAddress2 = '';
  @observable businessFee = '';
  @observable businessPhone = '';
  @observable businessEmail = '';
  @observable minimumOrder = '';
  @observable businessHours = {
    monday: {
      open: '',
      close: '',
    },
    tuesday: {
      open: '',
      close: '',
    },
    wednesday: {
      open: '',
      close: '',
    },
    thursday: {
      open: '',
      close: '',
    },
    friday: {
      open: '',
      close: '',
    },
    saturday: {
      open: '',
      close: '',
    },
    sunday: {
      open: '',
      close: '',
    },
  };
  @observable status = false;

  @observable businessNameValid = false;
  @observable businessDescriptionValid = false;
  @observable businessAddressValid = false;
  @observable businessAddress2Valid = false;
  @observable businessFeeValid = false;
  @observable businessPhoneValid = false;
  @observable businessEmailValid = false;
  @observable minimumOrderValid = false;
  @observable businessHoursValid = false;
  @observable signUpStep1Complete = false;

  @action
  businesNameChange = (event) => {
    this.businessName = event;
  }

  @action
  businesDescriptionChange = (event) => {
    this.businessDescription = event;
  }

  @action
  businesAddressChange = (event) => {
    this.businessAddress = event;
  }

  @action
  businesAddress2Change = (event) => {
    this.businessAddress2 = event;
  }

  @action
  businessFeeChange = (event) => {
    this.businessFee = event;
  }

  @action
  businessPhoneChange = (event) => {
    this.businessPhone = event;
  }

  @action
  businessEmailChange = (event) => {
    this.businessEmail = event;
  }

  @action
  minimumOrderChange = (event) => {
    this.minimumOrder = event;
  }

  @action
  businessHoursChange = (event, type, time) => {
    this.businessHours[type][time] = event;
  }



  ////UPDATE/EDIT STORE OBSERAVABLES
  ////-------------------------------------
  ////-------------------------------------
  ////-------------------------------------


  @observable updatedBusinessName = '';
  @observable updatedBusinessDescription = '';
  @observable updatedBusinessAddress = '';
  @observable updatedBusinessAddress2 = '';
  @observable updatedBusinessFee = '';
  @observable updatedBusinessPhone = '';
  @observable updatedBusinessEmail = '';
  @observable updatedMinimumOrder = '';
  @observable updatedBusinessHours = {
    monday: {
      open: '',
      close: '',
    },
    tuesday: {
      open: '',
      close: '',
    },
    wednesday: {
      open: '',
      close: '',
    },
    thursday: {
      open: '',
      close: '',
    },
    friday: {
      open: '',
      close: '',
    },
    saturday: {
      open: '',
      close: '',
    },
    sunday: {
      open: '',
      close: '',
    },
  };
  @observable updatedStatus = false;
  @observable updatedBusinessNameValid = false;
  @observable updatedBusinessDescriptionValid = false;
  @observable updatedBusinessAddressValid = false;
  @observable updatedBusinessAddress2Valid = false;
  @observable updatedBusinessFeeValid = false;
  @observable updatedBusinessPhoneValid = false;
  @observable updatedBusinessEmailValid = false;
  @observable updatedMinimumOrderValid = false;
  @observable updatedBusinessHoursValid = false;

  @action
  updatedBusinesNameChange = (event) => {
    console.log(event);
    this.updatedBusinessName = event;
  }

  @action
  updatedBusinesDescriptionChange = (event) => {
    // console.log(event);
    this.updatedBusinessDescription = event;
  }

  @action
  updatedBusinesAddressChange = (event) => {
    console.log(event);
    this.updatedBusinessAddress = event;
  }

  @action
  updatedBusinesAddress2Change = (event) => {
    console.log(event);
    this.updatedBusinessAddress2 = event;
  }

  @action
  updatedBusinessFeeChange = (event) => {
    console.log(event);
    this.updatedBusinessFee = event;
  }

  @action
  updatedBusinessPhoneChange = (event) => {
    console.log(event);
    this.updatedBusinessPhone = event;
  }

  @action
  updatedBusinessEmailChange = (event) => {
    console.log(event);
    this.updatedBusinessEmail = event;
  }

  @action
  updatedMinimumOrderChange = (event) => {
    console.log(event);
    this.updatedMinimumOrder = event;
  }

  @action
  updatedBusinessHoursChange = (event, type, time) => {
    this.updatedBusinessHours[type][time] = event;
  }

  @action
  updateStoreStatus = (event) => {
    // console.log(event);
    if(event == "true"){
      // console.log('asdfasdf');
      this.updatedStatus = true;
    }else {
      this.updatedStatus = false;
    }

  }



  @action
  updateStore(accessToken, id, fields, authorUid) {

    const updatedStore = {
      address: {
        address: this.updatedBusinessAddress,
        address2: this.updatedBusinessAddress2,
      },
      businessEmail: this.updatedBusinessEmail,
      description:  this.updatedBusinessDescription,
      minimumOrder: this.updatedMinimumOrder,
      name: this.updatedBusinessName,
      phoneNumber: this.updatedBusinessPhone,
      serviceFee: this.updatedBusinessFee,
      status: this.updatedStatus,
      businessHours: {
        monday: {
          open: this.updatedBusinessHours.monday.open,
          close: this.updatedBusinessHours.monday.close,
        },
        tuesday: {
          open: this.updatedBusinessHours.tuesday.open,
          close: this.updatedBusinessHours.tuesday.close,
        },
        wednesday: {
          open: this.updatedBusinessHours.wednesday.open,
          close: this.updatedBusinessHours.wednesday.close,
        },
        thursday: {
          open: this.updatedBusinessHours.thursday.open,
          close: this.updatedBusinessHours.thursday.close,
        },
        friday: {
          open: this.updatedBusinessHours.friday.open,
          close: this.updatedBusinessHours.friday.close,
        },
        saturday: {
          open: this.updatedBusinessHours.saturday.open,
          close: this.updatedBusinessHours.saturday.close,
        },
        sunday: {
          open: this.updatedBusinessHours.sunday.open,
          close: this.updatedBusinessHours.sunday.close,
        },
      }
    }



    const token = encodeURIComponent(accessToken);
    const businessName = encodeURIComponent(this.updatedBusinessName);
    const businessDescription = encodeURIComponent(this.updatedBusinessDescription);
    const businessAddress = encodeURIComponent(this.updatedBusinessAddress);
    const businessAddress2 = encodeURIComponent(this.updatedBusinessAddress2);
    const businessFee = encodeURIComponent(this.updatedBusinessFee);
    const businessPhone = encodeURIComponent(this.updatedBusinessPhone);
    const businessEmail = encodeURIComponent(this.updatedBusinessEmail);
    const minimumOrder = encodeURIComponent(this.updatedMinimumOrder);
    const businessHours = encodeURIComponent(this.updatedBusinessHours);
    const status = encodeURIComponent(this.updatedStatus);
    const uid = encodeURIComponent(authorUid);
    const _id = encodeURIComponent(id);


    // console.log('------------Update Store function run----------');
    // console.log(accessToken);
    // console.log(id);
    // console.log(authorUid);


    console.log(updatedStore);

    const formData = `access_token=${token}&name=${businessName}&description=${businessDescription}&address=${businessAddress}&address2=${businessAddress2}&serviceFee=${businessFee}&phoneNumber=${businessPhone}&businessEmail=${businessEmail}&minimumOrder=${minimumOrder}&businessHours=${businessHours}&status=${status}&uid=${uid}&id=${_id}`;


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

    // // postData(`https://dcapp-backend.herokuapp.com/auth/login`, '') ///staging domain backend
    const fetchResults = postData(`http://localhost:5000/api/edit/store`, '')  //local dev backend
    .then((data) => {

      console.log(data);

      if(data.success == true){

        console.log('Haha yup ------');
        // console.log(data);

        this.updatedBusinessNameValid = data.errors.nameInvalid;
        this.updatedBusinessDescriptionValid = data.errors.descriptionInvalid;
        this.updatedBusinessAddressValid = data.errors.addressInvalid;
        this.updatedBusinessAddress2Valid = data.errors.address2Invalid;
        this.updatedBusinessFeeValid = data.errors.serviceFeeInvalid;
        this.updatedBusinessPhoneValid = data.errors.phoneNumberInvalid;
        this.updatedBusinessEmailValid = data.errors.businessEmailInvalid;
        this.updatedMinimumOrderValid = data.errors.minimumOrderInvalid;

        return data;

      }else{


        Alert.alert(
        "Oops! Something Isn't Right",
        'Pleaes check the form and try again',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => {

          }},
        ],
          { cancelable: false }
        )

        this.updatedBusinessNameValid = data.errors.nameInvalid;
        this.updatedBusinessDescriptionValid = data.errors.descriptionInvalid;
        this.updatedBusinessAddressValid = data.errors.addressInvalid;
        this.updatedBusinessAddress2Valid = data.errors.address2Invalid;
        this.updatedBusinessFeeValid = data.errors.serviceFeeInvalid;
        this.updatedBusinessPhoneValid = data.errors.phoneNumberInvalid;
        this.updatedBusinessEmailValid = data.errors.businessEmailInvalid;
        this.updatedMinimumOrderValid = data.errors.minimumOrderInvalid;

        return false;
      }
    }) // JSON from `response.json()` call
    .catch(error => console.log('ERROR'));

    return fetchResults;


  }





////-------------------------------------
////-------------------------------------
////-------------------------------------
////END EDIT STORE OBSERVABLES0----------






  @action
  submitForm(mainStore, navi) {

    const businessName = encodeURIComponent(this.businessName);
    const businessDescription = encodeURIComponent(this.businessDescription);
    const businessAddress = encodeURIComponent(this.businessAddress);
    const businessAddress2 = encodeURIComponent(this.businessAddress2);
    const businessFee = encodeURIComponent(this.businessFee);
    const businessPhone = encodeURIComponent(this.businessPhone);
    const businessEmail = encodeURIComponent(this.businessEmail);
    const minimumOrder = encodeURIComponent(this.minimumOrder);
    const businessHours = encodeURIComponent(this.businessHours);

    const formData = `access_token=${mainStore.token}&name=${businessName}&description=${businessDescription}&address=${businessAddress}&address2=${businessAddress2}&serviceFee=${businessFee}&phoneNumber=${businessPhone}&businessEmail=${businessEmail}&minimumOrder=${minimumOrder}&businessHours=${businessHours}&status=${false}`;


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


    postData(`http://localhost:5000/api/add/store`, '') //local dev
    // postData(`https://dcapp-backend.herokuapp.com/api/add/store`, '') // Dev back-end endpoint
    .then((data) => {

      console.log(data);

      if(data.success == true){
        this.isValid = true;
        this.signUpStep1Complete = true;
        // this.clearStore();
        navi.navigate("Home");
        // this.isValid = false;
      }else{

        Alert.alert(
        "Oops! Something Isn't Right",
        'Pleaes check the form and try again',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => {

          }},
        ],
          { cancelable: false }
        )

        this.businessNameValid = data.errors.nameInvalid;
        this.businessDescriptionValid = data.errors.descriptionInvalid;
        this.businessAddressValid = data.errors.addressInvalid;
        this.businessAddress2Valid = data.errors.address2Invalid;
        this.businessFeeValid = data.errors.serviceFeeInvalid;
        this.businessPhoneValid = data.errors.phoneNumberInvalid;
        this.businessEmailValid = data.errors.businessEmailInvalid;
        this.minimumOrderValid = data.errors.minimumOrderInvalid;
        // this.signUpStep1Complete = data.errors.step1Valid;

      }


      // this.businessHoursValid = data.errors.;


    })
    .catch(error => console.error(error));


    console.log('Submitting form.....')
  }

  autorun = () => {
    console.log(this);
  }
}

// var cntStore = window.store = new CountersStore

export default CountersStore;
