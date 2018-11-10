import * as React from "react";
import { Alert, Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base";
import { observer, inject } from "mobx-react/native";
import Expo from 'expo';
import styles from "./styles";
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

		// home.clearStore;
		// loginStore.clearStore;

		//NEED TO IMPLENT DO NOT CLEAR LOCAL STORED TOKEN WHEN ARRIVING ON LOGIN SCREEN
		// home.deauthenticateUser();
		// if(!home.userAuthenticated){
		// 	this.props.navigation.navigate("Home");
		// }
	}

	facebookLogin = () => {

		const home = this.props.mainStore;
		const loginStore = this.props.mainStore;
		var user = {};

		const logIn = async () => {

	  const { type, token, expires, permissions } = await Expo.Facebook.logInWithReadPermissionsAsync('192651401441339', {
		      permissions: ['public_profile', 'email'],
		    });



		  if (type === 'success') {




		    // Get the user's name using Facebook's Graph API
		    const response = await fetch(
		      `https://graph.facebook.com/me?access_token=${token}&fields=name,id,email,picture`);

				const { picture, name, id, email } = await response.json();

				console.log(email);

				home.setEmail(email);
				home.setName(name);
				home.setProfileImage(picture.data.url);
				home.toggleAuthenticateStatus();
				home.authenticateUser(token);
				home.fbAuthentication();

		    Alert.alert(
		      'Logged in!',
		      `Hi ${name}!`,
		    );

				// const
				//wait for response if new user take them to consumer sign up screen
				//if existing user take them to the homepage

				this.props.navigation.navigate("Home");



				// console.log(user.email);

				// loginStore.authenticateFB(token, user)

				//use ID to create a userObject for facebook user with ID and accesstoken fields
				// If authenticated user and id + token are recieved create a POST request to backend to
				// to see if User ID exists already in the user table if not create the user and store the id and accesstoken
				// if user already exists then store the new access token
				// console.log(email);



		  }else {
				//Cancelled or error
				Alert.alert(
					'Facebook',
					`You weren't authenticated through Facebook, try again!`,
				);
			}
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
					// "108562474867511286438"
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
					{/* {this.props.loginForm} */}
					<View padder>
						{/* <Button style={{ marginTop: 12, borderRadius: 25 }} block onPress={() => this.props.onLogin()}>
							<Text>Login</Text>
						</Button> */}
						<Button style={styles.primaryBtn_deep_blue} block onPress={() => this.facebookLogin()}>
							<Text>Login with Facebook</Text>
						</Button>
						<Button style={styles.primaryBtn_orange} block danger onPress={() => this.googleLogin()}>
							<Text>Login with Google</Text>
						</Button>

						<Button style={styles.primaryBtn_blue} block onPress={() => 		this.props.navigation.navigate("EmailLogin")}>
							<Text>Continue with my email</Text>
						</Button>


						{/* Old Button for sending user to the sign up page
							*************************************************
							*/}

						{/* <Button style={{ marginTop: 14, borderRadius: 25 }} block danger onPress={() => 		this.props.navigation.navigate("SignUp", {
									title: 'User Registration',
									type: 'consumer'
								})}>
							<Text>Sign Up</Text>
						</Button> */}

						{/* Button for sending user to the sign up component
							* @param = type - type of user signing up
							*					 title - the title of the navigator on
																 following screen
 							*************************************************
							*/}

						{/* <Button style={{ marginTop: 14 }} block warning onPress={() =>         this.props.navigation.navigate("SignUp", {
											title: 'Provider Registration',
											type: 'merchant'
										})}>
							<Text>Sign Up As A Provider</Text>
						</Button> */}

						<Button onPress={() => this.props.navigation.navigate("Home")} style={{alignSelf: "center"}} iconLeft transparent primary>
							<Icon name='home' />
							<Text>I'll login later</Text>
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
