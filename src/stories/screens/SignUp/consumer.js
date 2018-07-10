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
						/>
					</Item>
					<Item floatingLabel>
						<Label>Email:</Label>
						<Input
							style={styles.textField}
							onChangeText={event => signer.emailChange(event)}
							value={signer.email}
						/>
					</Item>
					<Item floatingLabel last>
						<Label>Password:</Label>
						<Input
							style={styles.textField}
							onChangeText={event => signer.pwdChange(event)}
							secureTextEntry={true}
						/>
					</Item>
					<Button onPress={signer.submitForm} style={styles.submitBtn} color="red" block ><Text>SUBMIT</Text></Button>
				</Form>
			</Container>
		);
	}
}

export default ConsumerGreeting;
