import { observable, action, computed, autorun } from "mobx";

class CountersStore {
  @observable businessName = '';
  @observable businessAddress = '';
  @observable businessAddress2 = '';
  @observable businessFee = '';
  @observable businessPhone = '';
  @observable businessEmail = '';
  @observable minimumOrder = '';
  @observable businessHours = {};
  @observable status = false;

  @observable businessNameValid = false;
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
  businessHoursChange = (event) => {
    this.businessHours = event;
  }

  @action
  increase() {
    // this.count++;
    // console.log("incremented" + this.count);
  }
  @action
  decrease() {
    // this.count--;
    // console.log("decrement" + this.count);
  }
  @computed get getTotal() {
    // return this.count;
  }
  autorun = () => {
    console.log(this);
  }
}

// var cntStore = window.store = new CountersStore

export default CountersStore;
