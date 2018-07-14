import { observable, action, computed } from "mobx";
import Auth from '../../modules/Auth';
import { AsyncStorage } from "react-native"

class HomeStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable items = [];
  @observable name = '@user';
  @observable authenticated = false;

  @action
  fetchItems(data) {
    this.items = data;
    this.isLoading = false;
  }

  @action
  setName(userName) {
    this.name = userName;
  }

  @computed get getName(){
    return this.name;
  }

  @action
  toggleAuthenticateStatus() {
    this.authenticated = Auth.isUserAuthenticated();
  }

  @action
  deauthenticateUser() {
    Auth.deauthenticateUser();
  }

  @computed get userAuthenticated() {
    return  AsyncStorage.getItem('token') !== null;
  }

  @computed get getToken() {
    return  AsyncStorage.getItem('token');
  }

}

export default HomeStore;
