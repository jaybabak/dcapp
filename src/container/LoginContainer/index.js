// @flow
import * as React from "react";
import { Item, Input, Icon, Form, Toast } from "native-base";
import { observer, inject } from "mobx-react/native";

import Login from "../../stories/screens/Login";
// import data from "./data";

export interface Props {
	navigation: any,
	loginForm: any,
	mainStore: any,
}
export interface State {}

@inject("loginForm", "mainStore")
@observer
export default class LoginContainer extends React.Component<Props, State> {
	emailInput: any;
	pwdinput: any;
	login() {
		const loginStore = this.props.loginForm;
		const home = this.props.mainStore;

		// console.log(home.getToken);
		console.log(this.props.mainStore.authenticated);
		// this.props.mainStore.toggleAuthenticateStatus();

		loginStore.submitForm(this.props.navigation, home);
		// this.props.navigation.navigate("Home");

	}

	componentWillMount(){
				//  this.props.mainStore.toggleAuthenticateStatus();
		 this.props.mainStore.deauthenticateUser();
		 console.log(this.props.mainStore.authenticated);

	}

	render() {
		const form = this.props.loginForm;
		const Fields = (
			<Form>
				<Item error={form.emailError ? true : false}>
					<Icon active name="person" />
					<Input
						placeholder="Email"
						keyboardType="email-address"
						ref={c => (this.emailInput = c)}
						value={form.email}
						onBlur={() => form.validateEmail()}
						onChangeText={e => form.emailOnChange(e)}
					/>
				</Item>
				<Item error={form.passwordError ? true : false}>
					<Icon active name="unlock" />
					<Input
						placeholder="Password"
						ref={c => (this.pwdinput = c)}
						value={form.password}
						onBlur={() => form.validatePassword()}
						onChangeText={e => form.passwordOnChange(e)}
						secureTextEntry={true}
					/>
				</Item>
			</Form>
		);

		//****************************
		//Created form field in side the login container file
		// Imports Login component (../stories/screens/Login/index.js) and passes the fields to the login component as prop for "loginForm"
		// onLogin business logic inside function (this file) called login() <--validation determines if valid

		return <Login navigation={this.props.navigation} loginForm={Fields} onLogin={() => this.login()} />;
	}
}
