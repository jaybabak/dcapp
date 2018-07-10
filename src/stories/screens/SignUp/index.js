import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import { observer, inject } from "mobx-react/native";

import styles from "./styles";

import ConsumerGreeting from "./consumer";
import BusinessGreeting from "./business";

export interface Props {
	navigation: any;
	signUpStore: any,
}

export interface State {}

@inject("signUpStore")
@observer
class SignUp extends React.Component<Props, State> {

// const param = this.props.navigation.state.params;

	// SignMeUp = () => {
	//
	// 	if(param.type == 'consumer') {
	//
	// 		return <Text>Consumer</Text>;
	//
	// 	}else if(param.type == 'business'){
	// 		return <Text>Business</Text>;
	// 	}
	// }

	// componentWillMount = () => {
	// 	this.props.navigation.getParam('type');
	// }




	//LEFT OFF HERE TRYING TO CREATE THE TWO SEPERATE COMPONENTS FOR SIGN UP AND BUSINESS
	//https://reactjs.org/docs/conditional-rendering.html

	render() {
		const param = this.props.navigation.state.params;

		const signMeUp = this.props.signUpStore;

		if(param.type == 'consumer'){
			signupForm = 	<ConsumerGreeting signUpStore={signMeUp}/>;
		}else if(param.type == 'merchant'){
			signupForm = 	<BusinessGreeting/>;
		}

		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.title : "Error"}</Title>
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



export default SignUp;
