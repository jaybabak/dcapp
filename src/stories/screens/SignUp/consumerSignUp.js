import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Footer, Toast, FooterTab, Form, Item, Label, Input } from "native-base";
import { View, Alert, TextInput } from 'react-native';
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
						<Item inlineLabel last rounded>
						<Label>Name:</Label>
						<Input
							style={styles.textField}
							onChangeText={event => signer.nameChange(event)}
							value={signer.name}
							// onBlur={signer.submitForm}
						/>
					</Item>
					<Item inlineLabel last rounded>
						<Label>Email:</Label>
						<Input
							style={styles.textField}
							onChangeText={event => signer.emailChange(event)}
							value={signer.email}
							// onBlur={signer.submitForm}
						/>
					</Item>
					<Item inlineLabel last rounded>
						<Label>Password:</Label>
						<Input
							style={styles.textField}
							onChangeText={event => signer.pwdChange(event)}
							secureTextEntry={true}
							value={signer.password}
							// onBlur={signer.submitForm}
						/>
					</Item>
					<Button onPress={this.nextPage} style={styles.submitBtn} color="red" block ><Text>Accept the terms and continue...</Text></Button>
				</Form>
			</Container>
		);
	}
}

export default ConsumerSignUp;
