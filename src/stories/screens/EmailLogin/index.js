import * as React from "react";
import { Alert, Image, Modal, Platform, TouchableHighlight } from "react-native";
import { Container, Card, CardItem, Content, Header, Body, Title, Button, Text, View, Icon, Footer, Toast } from "native-base";
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
class EmailLogin extends React.Component<Props, State> {



	constructor() {
		super();
		this.state = {
			modalVisible: false,
		};
	}


	componentDidMount(){

		const home = this.props.mainStore;
		const loginStore = this.props.loginForm;

		home.clearStore;
		loginStore.clearStore;

		// console.log(home.getToken);

		//CLEAR LOCAL STORED TOKEN WHEN ARRIVING ON LOGIN SCREEN
		// home.deauthenticateUser();

	}


	render() {

		const loginStore = this.props.loginForm;

		return (
			<Container>
				<Header style={{ height: 325 }}>
					<Body style={{ alignItems: "center" }}>
						{/* <Icon name="rewind" style={{ fontSize: 104 }} /> */}
						<Title style={{ marginTop: 50 }}>DCAPP</Title>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }}>
								Get your dry cleaning picked-up & delivered, simple!
							</Text>
						</View>
					</Body>
				</Header>
				<Content>
					{this.props.loginFormFields}
					<View padder>

						<Button onPress={() => {

							this.setState({
								modalVisible: !this.state.modalVisible
							});

						}} style={{alignSelf: "flex-end"}} iconLeft transparent primary>
							{/* <Icon name='home' /> */}
							<Text>Forgot Password?</Text>
						</Button>

						<Button bordered style={{ marginTop: 12, borderRadius: 25 }} block onPress={() => this.props.onLogin()}>
							<Text>Continue to login with my email</Text>
						</Button>

						<Button onPress={() => 		this.props.navigation.navigate("SignUp", {
									title: 'User Registration',
									type: 'consumer'
								})} style={{alignSelf: "center"}} iconLeft transparent primary>
							<Icon name='home' />
							<Text>Register</Text>
						</Button>
					</View>
				</Content>
				<Footer style={{ backgroundColor: "#F8F8F8" }}>
					<View style={{ alignItems: "center", opacity: 1, flexDirection: "column" }}>
						<View padder>
							{/* <Text style={{ marginTop: 8, justifyContent:'center', color: "#000", fontSize: 12 }}>Skip for now</Text> */}
							<Button onPress={() => this.props.navigation.navigate("Home")} style={{alignSelf: "center"}} iconLeft transparent primary>
								<Icon name='ios-arrow-round-forward' />
								<Text>I'll login later</Text>
							</Button>


							<Modal

								animationType="slide"
								transparent={false}
								visible={this.state.modalVisible}
								onRequestClose={() => {
									Alert.alert('Modal has been closed.');
								}}>

									 {/* <Header /> */}
									 <Content>
										 <Card style={styles.mainCard}>
											 <CardItem header>
												 <Text>Reset Your Password!</Text>
											 </CardItem>
											 <CardItem>
												 <Body>
													 <Text>
														 Enter your email below to get sent instruction on how to reset your password.
													 </Text>
												 </Body>
											 </CardItem>

											 {this.props.forgotPasswordForm}

											 <CardItem footer>
												 <Text>The orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation.</Text>
											 </CardItem>

											 <Button block bordered

												 style={styles.cardBtn}
												 onPress={() => {

													// console.log(loginStore.forgotEmailError);
													if(loginStore.forgotEmailField == ''){
														Toast.show({
															text: "Enter a valid email",
															duration: 4000,
															position: "bottom",
															textStyle: { textAlign: "center" },
														});

													}else{
														this.setState({
															modalVisible: !this.state.modalVisible
														});
														Toast.show({
															text: "An email has been sent to " + loginStore.forgotEmailField + ". You should recieve an email momentarily.",
															duration: 4000,
															position: "bottom",
															textStyle: { textAlign: "center" },
														});

													}



												}}>
												<Text>Reset My Password</Text>
											</Button>

											 <Button block

												 style={styles.cardBtn}
												 onPress={() => {
	 												this.setState({
	 													modalVisible: !this.state.modalVisible
	 												});
	 											}}>
												<Text>Cancel</Text>
											</Button>
										</Card>
									 </Content>

							</Modal>


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

						</View>
					</View>
				</Footer>
			</Container>
		);
	}
}

export default EmailLogin;
