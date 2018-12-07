import { observable, action, computed } from "mobx";
import Auth from '../../modules/Auth';
import { AsyncStorage, Alert } from "react-native"

class AdminStore {
  @observable items = [];
  @observable fetchItemsStatus = false;




  @computed get getStoresPending(){
    return this.items;
  }

  @action
  fetchItems(accessToken) {

    const token = encodeURIComponent(accessToken);
    // console.log(accessToken);

    const formData = `&access_token=${token}`;


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
    const fetchResults = postData(`http://localhost:5000/api/stores/pending`, '')  //local dev backend
    .then((data) => {

      // console.log(data);

      if(data.success == true){


        this.items = data.data;
        this.fetchItemsStatus = true;

        // console.log(data);

        return this.items;

      }else{

        return false;
      }
    }) // JSON from `response.json()` call
    .catch(error => console.log('ERROR'));

    return fetchResults;


  }

  @action
  clearStore() {
    //reset all variables
    this.isLoading = true;
  }

}

export default AdminStore;
