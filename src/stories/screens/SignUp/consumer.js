import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Footer, Toast, FooterTab, Form, Item, Label, Input } from "native-base";
import { View, Alert, TextInput } from 'react-native';
import { observer, inject } from "mobx-react/native";

import styles from "./styles";
export interface Props {
	navigation: any,
	signUpStore: any,
}
export interface State {}

@inject("signUpStore")
@observer
class ConsumerGreeting extends React.Component<Props, State> {

// 	constructor(props, context) {
// 	super(props, context);
//
// 	// set the initial component state
// 	this.state = {
// 		formValid: false,
// 	};
//
// }


	confirmSignUp = () => {

		const signers = this.props.signUpStore;
		signers.submitForm()

		setTimeout(() => {
			if(signers.validateForm == true){

				this.props.navigation.navigate("Home", {
					status: true,
					name: signers.name
				});
				signers.clearStore();
			}
		}, 1000);

	}



	render() {

		const signer = this.props.signUpStore;
		console.log(signer);



		return (
			<Container>
				<Form>
					<Item floatingLabel>
						<Label>Name:</Label>
						<Input
							style={styles.textField}
							onChangeText={event => signer.nameChange(event)}
							value={signer.name}
							onBlur={signer.submitForm}
						/>
					</Item>
					<Item floatingLabel>
						<Label>Email:</Label>
						<Input
							style={styles.textField}
							onChangeText={event => signer.emailChange(event)}
							value={signer.email}
							onBlur={signer.submitForm}
						/>
					</Item>
					<Item floatingLabel last>
						<Label>Password:</Label>
						<Input
							style={styles.textField}
							onChangeText={event => signer.pwdChange(event)}
							secureTextEntry={true}
							value={signer.password}
							onBlur={signer.submitForm}
						/>
					</Item>
					<Button onPress={this.confirmSignUp} style={styles.submitBtn} color="red" block ><Text>Sign Up!</Text></Button>
				</Form>
			</Container>
		);
	}
}

export default ConsumerGreeting;
