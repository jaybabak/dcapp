import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Footer, Toast, FooterTab, Form, Item, Label, Input } from "native-base";
import { View, Alert, TextInput, TouchableOpacity } from 'react-native';
import { observer, inject } from "mobx-react/native";

import styles from "./styles";
export interface Props {
	navigation: any,
	signUpStore: any,
	mainStore: any,
}
export interface State {}

@inject("signUpStore", "mainStore")
@observer
class ConsumerSignUp extends React.Component<Props, State> {

	constructor(props) {
	super(props);
		this.state = {
			isShowingText: true,
			eyeVisibleIcon: 'eye'
		};
	}

	toggleSecure = () => {
		this.setState({
			isShowingText: !this.state.isShowingText,
			eyeVisibleIcon: this.state.eyeVisibleIcon == 'eye' ? 'eye-off' : 'eye'
		})
	}

	toggleHelp = () => {

		const signers = this.props.signUpStore;
		const home = this.props.mainStore;

		Toast.show({
			text: "Some Helpful Message About The Form Field With Error",
			duration: 4000,
			position: "bottom",
			textStyle: { textAlign: "center" },
		});
	}

	confirmSignUp = () => {

		const signers = this.props.signUpStore;
		const home = this.props.mainStore;

		if(signers.validateForm == true){
			Toast.show({
				text: home.getName + " you already signed up silly!",
				duration: 4000,
				position: "bottom",
				textStyle: { textAlign: "center" },
			});
			return;
		}
		console.log(signers.errors);
		signers.submitForm(this.props.navigation);
	}


	nextPage = () => {

		const signers = this.props.signUpStore;
		const home = this.props.mainStore;

		this.props.navigation.navigate("ConsumerSignUpStep2");
		// signers.submitForm(this.props.navigation);
	}

	render() {

		const signer = this.props.signUpStore;
		console.log(signer);

		return (
			<Container>
				<Form>
					<Item inlineLabel last rounded
						error={signer.nameValid}
						style={styles.textWrapper}
						>
						<Label>First name:</Label>
						<Input
							style={styles.textField}
							onChangeText={event => signer.nameChange(event)}
							value={signer.name}
							// onBlur={true}
						/>
						<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
							<Icon style={styles.helpIcon} size={40} name='help' />
						</Button>
					</Item>
					<Item inlineLabel last rounded
						error={signer.lastNameValid}
						style={styles.textWrapper}
						>
						<Label>Last name:</Label>
						<Input
							style={styles.textField}
							onChangeText={event => signer.lastNameChange(event)}
							value={signer.lastName}
							// onBlur={true}
						/>
						<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
							<Icon style={styles.helpIcon} size={40} name='help' />
						</Button>
					</Item>
					<Item inlineLabel last rounded
						error={signer.emailValid}
						style={styles.textWrapper}
						>
						<Label>Email:</Label>
						<Input
							style={styles.textField}
							onChangeText={event => signer.emailChange(event)}
							value={signer.email}
							// onBlur={signer.submitForm}
						/>
						<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
							<Icon style={styles.helpIcon} size={40} name='help' />
						</Button>
					</Item>

					<Text style={{
							display: 'none',
							alignSelf: 'center',
							fontSize: 14,
							marginTop: 5,
							color: 'red',}}></Text>

					<Item inlineLabel last rounded
						error={signer.passwordValid}
						style={styles.textWrapper}
						>
						<Label>Password:</Label>
						<Input
							style={styles.textField}
							onChangeText={event => signer.pwdChange(event)}
							secureTextEntry={this.state.isShowingText}
							value={signer.password}
							// onBlur={signer.submitForm}
						/>
						<Button style={styles.inlineIconForField} onPress={this.toggleSecure}>
							<Icon style={styles.eyeIcon} name={this.state.eyeVisibleIcon} />
						</Button>
					</Item>
					<Button bordered onPress={this.nextPage} style={styles.submitBtn} color="red" block ><Text>Accept the terms and continue...</Text></Button>
					{/* <Button onPress={this.confirmSignUp} style={styles.submitBtn} color="red" block ><Text>Register!</Text></Button> */}
				</Form>
			</Container>
		);
	}
}

export default ConsumerSignUp;
