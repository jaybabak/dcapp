// @flow
import React from "react";
import { StackNavigator, DrawerNavigator, SwitchNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import EmailLoginContainer from "./container/EmailLoginContainer";
import Home from "./container/HomeContainer";
import SignUpContainer from "./container/SignUpContainer";
import MyListings from "./container/MyListingsContainer";
import Sidebar from "./container/SidebarContainer";
import ConsumerSignUpStep2 from "./stories/screens/SignUp/consumerSignUpStep2.js";

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
		MyListings: { screen: MyListings },
	},
	{
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		EmailLogin: { screen: EmailLoginContainer },
		SignUp: { screen: SignUpContainer },
		ConsumerSignUpStep2: { screen: ConsumerSignUpStep2 },
		Drawer: { screen: Drawer },
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
		mode: "modal"
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
