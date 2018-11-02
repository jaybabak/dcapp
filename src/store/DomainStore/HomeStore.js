import { observable, action, computed } from "mobx";
import Auth from '../../modules/Auth';
import { AsyncStorage } from "react-native"

class HomeStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable items = [];
  @observable name = '@user';
  @observable avatar = 'http://phot0x.com/sites/default/files/styles/promo_image/public/2018-08/2Artboard%201%20copy%204%40lmood.png?itok=U_BVx-0d';
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

  @action
  setProfileImage(url) {
    this.avatar = url;
  }

  @computed get getProfileImage(){
    return this.avatar;
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
    this.clearStore();
  }

  @computed get userAuthenticated() {
    return  AsyncStorage.getItem('token') !== null;
  }

  @computed get getToken() {
    AsyncStorage.getItem('token').then((response) => {
      return response
    });
  }

  @action
  clearStore() {
    this.name = "@user";
    this.avatar = 'http://phot0x.com/sites/default/files/styles/promo_image/public/2018-08/2Artboard%201%20copy%204%40lmood.png?itok=U_BVx-0d';
    this.authenticated = false;
    this.items = [];
    this.hasErrored = false;
    this.isLoading = true;
  }

}

export default HomeStore;
