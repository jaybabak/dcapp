// @flow
import React from "react";
import { StackNavigator, DrawerNavigator, SwitchNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import SignUpContainer from "./container/SignUpContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
		BlankPage: { screen: BlankPage },
	},
	{
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		SignUp: { screen: SignUpContainer },
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
