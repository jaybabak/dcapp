import * as React from "react";
import { Alert, Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base";
import { observer, inject } from "mobx-react/native";
import Expo from 'expo';
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

		console.log(home.getToken);

		//CLEAR LOCAL STORED TOKEN WHEN ARRIVING ON LOGIN SCREEN
		// home.deauthenticateUser();
		if(!home.userAuthenticated){
			this.props.navigation.navigate("Home");
		}


	}

	signUpUser(){

		this.props.navigation.navigate("SignUp", {
			title: 'Register as a User',
			type: 'consumer'
		})

	}

	facebookLogin = () => {

		const home = this.props.mainStore;

		const logIn = async () => {
	  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('192651401441339', {
		      permissions: ['public_profile'],
		    });
		  if (type === 'success') {
		    // Get the user's name using Facebook's Graph API
		    const response = await fetch(
		      `https://graph.facebook.com/me?access_token=${token}&fields=name,id,email,picture`);

				const { picture, name, id, email } = await response.json();

				// console.log(picture.data.url);

				home.setName(name);
				home.setProfileImage(picture.data.url);
				home.toggleAuthenticateStatus();
				home.authenticateUser(id);

				// console.log(id, email, picture, name);

		    Alert.alert(
		      'Logged in!',
		      `Hi ${name}!`,
		    );

				this.props.navigation.navigate("Home");


		  }
		}

		if(!home.userAuthenticated){
			this.props.navigation.navigate("Home");
		}

		logIn()


	}

	googleLogin = () => {

		const home = this.props.mainStore;

		const logInGoogle = async () => {
			try {
				const result = await Expo.Google.logInAsync({
					androidClientId: '1066032544921-4orn97ko4aodn1hafa8lruu4mj92dpm8.apps.googleusercontent.com',
					iosClientId: '1066032544921-6eb51lcnnrpbbo9dfvrp19fp815dfgdf.apps.googleusercontent.com',
					scopes: ['profile', 'email'],
				});

				if (result.type === 'success') {
					console.log(result);

					home.setName(result.user.name);
					home.setProfileImage(result.user.photoUrl);
					home.toggleAuthenticateStatus();
					home.authenticateUser(result.accessToken);

					Alert.alert(
						'Logged in!',
						`Hi ${result.user.name}!`,
					);

					this.props.navigation.navigate("Home");

					return result.accessToken;
				} else {
					return {cancelled: true};
				}
			} catch(e) {
				return {error: true};
			}
		}

		if(!home.userAuthenticated){
			this.props.navigation.navigate("Home");
		}

		logInGoogle();

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

						<Button style={{ marginTop: 14 }} block onPress={() => this.facebookLogin()}>
							<Text>Login with Facebook</Text>
						</Button>
						<Button style={{ marginTop: 14 }} block warning onPress={() => this.googleLogin()}>
							<Text>Login with Google</Text>
						</Button>

						<Button style={{ marginTop: 14 }} block danger onPress={() => 		this.props.navigation.navigate("SignUp", {
									title: 'User Registration',
									type: 'consumer'
								})}>
							<Text>Sign Up</Text>
						</Button>

						{/* <Button style={{ marginTop: 14 }} block warning onPress={() =>         this.props.navigation.navigate("SignUp", {
											title: 'Provider Registration',
											type: 'merchant'
										})}>
							<Text>Sign Up As A Provider</Text>
						</Button> */}
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
