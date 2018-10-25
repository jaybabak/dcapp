
## Get Started

### 1. System Requirements

* Globally installed [node](https://nodejs.org/en/)

* Globally installed [react-native CLI](https://facebook.github.io/react-native/docs/getting-started.html)


### 2. Installation

On the command prompt run the following commands

$ cd react-native-project

```
$ npm install
  or
  yarn install
```

### Run IOS or ANDROID
	* Opt #1:
		* react-native run-ios
	* Opt #2:
		* react-native run-android

	* ALSO Need To:
		* run database server locally: cd into server directory type command:
      -> ```sudo mongod```
      -> change file @ /server/models/index.js
		* run backend-express server locally
      -> $ npm start
      -> change LoginViewStore.js file @ /app/src/store/ViewStore/LoginViewStore.js to use localserver instead of deployed dev server (heroku)
      -> change SignUpStore.js file @ /app/src/store/ViewStore/SignUpStore.js to use localserver instead of deployed dev server (heroku)
