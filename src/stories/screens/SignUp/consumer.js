import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Footer, Toast, FooterTab } from "native-base";
import { View, AlertIOS, Alert, TextInput } from 'react-native';

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class ConsumerGreeting extends React.Component<Props, State> {


	constructor(props){
    super(props);

    this.state = {
      counter: 0,
			text: null
    }

    // this.callApi = this.callApi.bind(this);
  }

	  increase = () => {
			this.setState({
				counter: this.state.counter + 1
			});

		   Toast.show({
		      text: 'Counter @: ' + this.state.counter,
		      buttonText: "Ok"
		    })
				// alert("Test!");
	  }

	 decrease = () => {


		this.setState({counter: this.state.counter - 1})



			// AlertIOS.prompt(
		  // 'Confirm delete?',
		  // 'Would you like to decrease the counter for sure?',
		  // [
		  //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
		  //   {text: 'OK', onPress: () => this.setState({counter: this.state.counter - 1})},
		  // ],
			//   { cancelable: false }
			// )

			Toast.show({
				 text: 'Counter @: ' + this.state.counter,
				 buttonText: "Ok"
			 })


  }





	render() {

		return (
			<Container>
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

export default ConsumerGreeting;
