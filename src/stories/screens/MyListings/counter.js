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

	render() {

		return (
			<View>
				{this.props.countersStore}

				<Button bordered onPress={this.nextPage} style={styles.submitBtn} color="red" block ><Text>Continue...</Text></Button>
			</View>
		);
	}
}

export default Counter;
