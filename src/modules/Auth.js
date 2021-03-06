import { AsyncStorage } from "react-native"

class Auth {
 
  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token) {
     AsyncStorage.setItem('token', token);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return  AsyncStorage.getItem('token') !== null;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
     AsyncStorage.removeItem('token');
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    return AsyncStorage.getItem('token');
  }

}

export default Auth;
