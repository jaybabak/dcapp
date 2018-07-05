import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Footer, Toast, FooterTab, Form, Item, Label, Input } from "native-base";
import { View, Alert, TextInput } from 'react-native';

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class ConsumerGreeting extends React.Component<Props, State> {


	constructor(props){
    super(props);

    this.state = {
			text: null,
			user: {
			}
    }

    this.submitForm = this.submitForm.bind(this);
    this.textChange = this.textChange.bind(this);
  }


	submitForm = (text) => {

		//  this.setState({text});
		// console.log(text);
		//
		// if (!this.state.isReady) {
		// 	return <Expo.AppLoading />;
		// }

		Alert.alert(
	  'Registration Nearly Complete!',
	  'Are you sure you would like to submit this as a consumer?',
	  [
	    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
	    {text: 'OK', onPress: () => {
				Toast.show({
					 text: 'Signup Completed!',
					 buttonText: "Ok"
				 })
				// console.log(text.target);
			}},
	  ],
		  { cancelable: false }
		)
  }

	textChange = (field) => (event) => {


    const user = this.state.user;
		user[field] = event;

    this.setState({
      user
    });

		console.log(this.state.user);

	}

	render() {

		return (
			<Container>
				<Form>
					<Item floatingLabel>
						<Label>Name:</Label>
						<Input
							style={styles.textField}
							onChangeText={this.textChange('name')}
							value={this.state.user.name}
						/>
					</Item>
					<Item floatingLabel>
						<Label>Email:</Label>
						<Input
							style={styles.textField}
							onChangeText={this.textChange('email')}
							value={this.state.user.email}
						/>
					</Item>
					<Item floatingLabel>
						<Label>Password:</Label>
						<Input
							style={styles.textField}
							onChangeText={this.textChange('password')}
							secureTextEntry={true}
						/>
					</Item>
					<Button onPress={this.submitForm} style={styles.submitBtn} color="red" block ><Text>SUBMIT</Text></Button>
				</Form>
			</Container>
		);
	}
}

export default ConsumerGreeting;
