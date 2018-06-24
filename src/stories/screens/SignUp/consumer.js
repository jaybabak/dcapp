import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Footer, Toast, FooterTab } from "native-base";
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

		Alert.alert(
	  'Confirm Registration?',
	  'Are you sure you would like to submit?',
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
				<Text>Name:</Text>
				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					onChangeText={this.textChange('name')}
					value={this.state.text}
				/>
				<Text>Email:</Text>
				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					onChangeText={this.textChange('email')}
					value={this.state.text}
				/>
				<Text>Password:</Text>
				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					onChangeText={this.textChange('password')}
				/>

				<Button onPress={this.submitForm} style={styles.submitBtn} color="red" rounded><Text>SUBMIT</Text></Button>

			</Container>
		);
	}
}

export default ConsumerGreeting;
