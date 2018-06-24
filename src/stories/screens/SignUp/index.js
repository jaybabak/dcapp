import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
import Counter from "./counter";
import ConsumerGreeting from "./consumer";

export interface Props {
	navigation: any;
}



export interface State {}
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




	//LEFT OFF HERE TRYING TO CREATE THE TWO SEPERATE COMPONENTS FOR SIGN UP AND BUSINESS
	//https://reactjs.org/docs/conditional-rendering.html

	render() {
		const param = this.props.navigation.state.params;
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
					<ConsumerGreeting/>
					{/* <SignMeUp/> */}
					{/* <Counter/> */}
					{/* <Text>{param !== undefined ? param.id: "List Thumbnails are the medium to exhibit an image with your list item. To create a thumbnail list, nest <Thumbnail> component within <ListItem> component with few props and style. List Thumbnails are the medium to exhibit an image with your list item. To create a thumbnail list, nest <Thumbnail> component within <ListItem> component with few props and style."}</Text> */}
				</Content>
			</Container>
		);
	}
}



export default SignUp;
