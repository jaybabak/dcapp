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
    this.authenticated = this.userAuthenticated;
  }

  @action
  authenticateUser(token) {
    AsyncStorage.setItem('token', token).then((response) => {

    });

  }

  @action
  deauthenticateUser() {
    AsyncStorage.removeItem('token');
    this.authenticated = false;
  }

  @computed get userAuthenticated() {
    return  AsyncStorage.getItem('token') !== null;
  }

  @computed get getToken() {
    AsyncStorage.getItem('token').then((response) => {
      return response
    });
  }

}

export default HomeStore;
