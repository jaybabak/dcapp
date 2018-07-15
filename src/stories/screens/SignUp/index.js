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

	render() {
		const param = this.props.navigation.state.params;
		console.log(param);

		const signMeUp = this.props.signUpStore;

		if(param.type == 'consumer'){
			var signupForm = 	<ConsumerGreeting signUpStore={signMeUp} navigation={this.props.navigation}/>;
		}else if(param.type == 'merchant'){
			var signupForm = 	<BusinessGreeting/>;
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
