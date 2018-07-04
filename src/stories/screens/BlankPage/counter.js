import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Footer, Toast, FooterTab } from "native-base";
import { View, AlertIOS, Alert, TextInput } from 'react-native';


import styles from "./styles";
export interface Props {
	navigation: any,
	countersStore: any,
}
export interface State {}

class Counter extends React.Component<Props, State> {


	// constructor(props){
  //   super(props);

    // this.state = {
    //   counter: 0,
		// 	text: null
    // }

    // this.callApi = this.callApi.bind(this);
  // }

	  // increase = () => {
		// 	this.setState({
		// 		counter: this.state.counter + 1
		// 	});
		//
		//    Toast.show({
		//       text: 'Counter @: ' + this.state.counter,
		//       buttonText: "Ok"
		//     })
		// 		// alert("Test!");
	  // }

	//  decrease = () => {
	//
	//
	// 	this.setState({counter: this.state.counter - 1})
	//
	//
	//
	// 		// AlertIOS.prompt(
	// 	  // 'Confirm delete?',
	// 	  // 'Would you like to decrease the counter for sure?',
	// 	  // [
	// 	  //   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
	// 	  //   {text: 'OK', onPress: () => this.setState({counter: this.state.counter - 1})},
	// 	  // ],
	// 		//   { cancelable: false }
	// 		// )
	//
	// 		Toast.show({
	// 			 text: 'Counter @: ' + this.state.counter,
	// 			 buttonText: "Ok"
	// 		 })
	//
	//
  // }





	render() {

		return (
			<View>
				{this.props.countersStore}

				<Button block onPress={() => this.props.computer()}>
					<Text>CLICK ME!</Text>
				</Button>
			</View>
		);
	}
}

export default Counter;
