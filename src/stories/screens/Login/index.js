import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base";
import { observer, inject } from "mobx-react/native";
//import styles from "./styles";
export interface Props {
	loginForm: any, //Declaring all the different properties being passed to it - 'any' used for data
	mainStore: any,
	onLogin: Function, //Also declaring the type of prop being passes for 'Functiosn being passed as props'
}

export interface State {
}

@inject("mainStore", "loginForm")
@observer
class Login extends React.Component<Props, State> {


	componentDidMount(){

		const home = this.props.mainStore;
		const loginStore = this.props.loginForm;

		//CLEAR LOCAL STORED TOKEN WHEN ARRIVING ON LOGIN SCREEN
		// home.deauthenticateUser();


	}

	signUpUser(){

		this.props.navigation.navigate("SignUp", {
			title: 'Register as a User',
			type: 'consumer'
		})

	}


	render() {
		return (
			<Container>
				<Header style={{ height: 200 }}>
					<Body style={{ alignItems: "center" }}>
						<Icon name="rewind" style={{ fontSize: 104 }} />
						<Title>DCAPP</Title>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }}>
								Get your dry cleaning picked-up & delivered, simple!
							</Text>
						</View>
					</Body>
				</Header>
				<Content>
					{this.props.loginForm}
					<View padder>
						<Button style={{ marginTop: 12 }} block onPress={() => this.props.onLogin()}>
							<Text>Login</Text>
						</Button>
						<Button style={{ marginTop: 14 }} block danger onPress={() => 		this.props.navigation.navigate("SignUp", {
									title: 'User Registration',
									type: 'consumer'
								})}>
							<Text>Sign Up</Text>
						</Button>
						<Button style={{ marginTop: 14 }} block warning onPress={() =>         this.props.navigation.navigate("SignUp", {
											title: 'Provider Registration',
											type: 'merchant'
										})}>
							<Text>Sign Up As A Provider</Text>
						</Button>
						<Button onPress={() => this.props.navigation.navigate("Home")} style={{alignSelf: "center"}} iconLeft transparent primary>
							<Icon name='home' />
							<Text>Skip ></Text>
						</Button>
					</View>
				</Content>
				<Footer style={{ backgroundColor: "#F8F8F8" }}>
					<View style={{ alignItems: "center", opacity: 1, flexDirection: "row" }}>
						<View padder>
							<Text style={{ color: "#000" }}>Made with love by </Text>
						</View>
						<Image
							source={{ uri: "http://phot0x.com/sites/default/files/styles/promo_image/public/2017-10/Screen%20Shot%202017-10-07%20at%203.55.46%20AM.png" }}
							style={{ width: 422 / 4, height: 86 / 4 }}
						/>
					</View>
				</Footer>
			</Container>
		);
	}
}

export default Login;
