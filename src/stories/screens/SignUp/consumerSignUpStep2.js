import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Footer, Toast, FooterTab, Form, Item, Label, Input, ListItem, CheckBox } from "native-base";
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
class ConsumerSignUpStep2 extends React.Component<Props, State> {

	confirmSignUp = () => {

		const signers = this.props.signUpStore;
		const home = this.props.mainStore;

		if(signers.validateForm == true){

			return;
		}

		console.log('test');



		// Alert.alert(
		// 	'Ooops!',
		// 	`Something isn't right, please check the form again!`,
		// );

		signers.submitForm(this.props.navigation);
	}

	render() {

		const signer = this.props.signUpStore;
		console.log(signer);
		var signupForm =
					<Form>
							<Item inlineLabel>
							<Label>Address Name:</Label>
							<Input
								style={styles.textField}
								onChangeText={event => signer.nameChange(event)}
								value={signer.name}
								// onBlur={signer.submitForm}
							/>
						</Item>
						<Item inlineLabel>
							<Label>Address Type:</Label>
							<Input
								style={styles.textField}
								onChangeText={event => signer.emailChange(event)}
								value={signer.email}
								// onBlur={signer.submitForm}
							/>
						</Item>
						<Item inlineLabel last>
							<Label>Street:</Label>
							<Input
								style={styles.textField}
								onChangeText={event => signer.pwdChange(event)}
								secureTextEntry={true}
								value={signer.password}
								// onBlur={signer.submitForm}
							/>
						</Item>
						<Item inlineLabel last>
							<Label>Building Name:</Label>
							<Input
								style={styles.textField}
								onChangeText={event => signer.pwdChange(event)}
								secureTextEntry={true}
								value={signer.password}
								// onBlur={signer.submitForm}
							/>
						</Item>
						<Item inlineLabel last>
							<Label>Office/Apartment Floor:</Label>
							<Input
								style={styles.textField}
								onChangeText={event => signer.pwdChange(event)}
								secureTextEntry={true}
								value={signer.password}
								// onBlur={signer.submitForm}
							/>
						</Item>
						<Item inlineLabel last>
							<Label>Additional Directions:</Label>
							<Input
								style={styles.textField}
								onChangeText={event => signer.pwdChange(event)}
								secureTextEntry={true}
								value={signer.password}
								// onBlur={signer.submitForm}
							/>
						</Item>
						<Item inlineLabel last>
							<Label>Mobile Number:</Label>
							<Input
								style={styles.textField}
								onChangeText={event => signer.pwdChange(event)}
								secureTextEntry={true}
								value={signer.password}
								// onBlur={signer.submitForm}
							/>
						</Item>
						<ListItem>
							<CheckBox checked={true} color="blue"/>
							<Body>
								<Text>Save this as my preferred address</Text>
							</Body>
						</ListItem>

						<Button onPress={this.confirmSignUp} style={styles.submitBtn} color="red" block ><Text>Register!</Text></Button>
					</Form>;

		return (

			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>Tell Us About Yourself</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
				{signupForm}

				</Content>
			</Container>


		);
	}
}

export default ConsumerSignUpStep2;
