import { observable, action, computed } from "mobx";
import Auth from '../../modules/Auth';
import { AsyncStorage, Alert } from "react-native"

class HomeStore {
  @observable items = 'HA HA HA HA';

  @action
  fetchItems(data) {
    this.items = data;

  }

  @action
  clearStore() {
    //reset all variables
    this.isLoading = true;
  }

}

export default HomeStore;
