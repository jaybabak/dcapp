import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Footer, Toast, FooterTab } from "native-base";
import { View, AlertIOS, Alert, TextInput } from 'react-native';

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class BusinessGreeting extends React.Component<Props, State> {


	constructor(props){
    super(props);

    this.state = {
			text: ''
    }

    // this.callApi = this.callApi.bind(this);
  }


	decrease = () => {

  }





	render() {

		return (
			<Container>
				<Text>Business Sign Up Component</Text>
				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					onChangeText={(text) => {
							this.setState({text});
							console.log(text);
						}
					}
					value={this.state.text}
				/>
			</Container>
		);
	}
}

export default BusinessGreeting;
