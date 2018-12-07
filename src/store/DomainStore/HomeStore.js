import { observable, action, computed } from "mobx";
import Auth from '../../modules/Auth';
import { AsyncStorage, Alert } from "react-native"

class HomeStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable items = [];
  @observable name = '@user';
  @observable email = '';
  @observable forgotEmailField = '';
  @observable token = '';
  @observable avatar = 'http://phot0x.com/sites/default/files/styles/promo_image/public/2018-08/2Artboard%201%20copy%204%40lmood.png?itok=U_BVx-0d';
  @observable authenticated = false;
  @observable user = {};


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
  setEmail(email) {
    // console.log(email);
    this.email = email;
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
    this.token = token;
    AsyncStorage.setItem('token', token).then((response) => {
    });

  }

  @action
  fbAuthentication(){

    /* PARAMETERS
    **
    * navi -> the navigation paramater provided as property so that user can be redirected to homepage/dashboard after
    * homeStore -> passing in a property of the HomeStore so that we can set the name etc.. globally
    */

    // console.log(this.email);
    // console.log(this.token);
    // console.log(this.name);

    const userEmail = encodeURIComponent(this.email);
    const userName = encodeURIComponent(this.name);
    const accessToken = encodeURIComponent(this.token);
    const formData = `&name=${userName}&email=${userEmail}&access_token=${accessToken}`;

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

    // postData(`https://dcapp-backend.herokuapp.com/auth/login`, '') ///staging domain backend
    postData(`http://localhost:5000/auth/facebook/login`, '')  //local dev backend
    .then((data) => {
      // console.log(data);

      if(data.success == true){

        console.log(data);

        this.user = data.user[0];
        console.log(this.user);

        this.setName = this.user.name;
        this.setEmail = this.user.email;
        this.authenticateUser(this.user.facebook.token);
        // homeStore.toggleAuthenticateStatus();

    }else{
      console.log('HAHAHA FAIL AUTH');
      // Toast.show({
      //   text: 'Oops! Incorrect username or password.',
      //   position: 'bottom',
      //   buttonText: "Okay",
      //   duration: 5000,
      //   buttonTextStyle: { color: "#FFFFFF" },
      //   buttonStyle: { backgroundColor: "#2CACFB" }
      // })
    }
    }) // JSON from `response.json()` call
    .catch(error => console.log('ERROR'));
  }

  @action
  getSecretStuff(){

    console.log(this.token);
    const accessToken = this.token;
    const formData = `&access_token=${accessToken}`;

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

    // postData(`https://dcapp-backend.herokuapp.com/auth/login`, '') ///staging domain backend
    postData(`http://localhost:5000/api/dashboard`, '')  //local dev backend
    .then((data) => {

      console.log(data);

      // if(data.success == true){
      //
      //   console.log(data);
      //
      //
      //   }else{
      //     console.log('-------');
      //
      //   }
    }) // JSON from `response.json()` call
    .catch(error => console.log('ERROR'));

    //
    //
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', '/api/dashboard');
    // // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // // set the authorization HTTP header
    // xhr.setRequestHeader('Authorization', `bearer ${this.token}`);
    // xhr.responseType = 'json';
    // xhr.addEventListener('load', () => {
    //   if (xhr.status === 200) {
    //
    //     console.log(xhr.response);
    //     // this.setState({
    //     //   secretData: xhr.response.message,
    //     //   user: xhr.response.user,
    //     // });
    //     resolve(xhr.response);
    //   }
    // });
    // xhr.send();



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
    this.email = "";
    this.token = "";
    this.avatar = 'http://phot0x.com/sites/default/files/styles/promo_image/public/2018-08/2Artboard%201%20copy%204%40lmood.png?itok=U_BVx-0d';
    this.authenticated = false;
    this.items = [];
    this.hasErrored = false;
    this.isLoading = true;
  }

}

export default HomeStore;
