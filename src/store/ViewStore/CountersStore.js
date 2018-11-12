import { observable, action, computed, autorun } from "mobx";

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

  @action
  submitForm(mainStore) {

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


    postData(`http://localhost:5000/api/add/store`, '')
    .then((data) => {

      console.log(data);

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
