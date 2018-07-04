import * as React from "react";
import { View } from "react-native";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import { observer, inject } from "mobx-react/native";


import Counter from "./counter";

import styles from "./styles";
export interface Props {
	navigation: any,
	countersStore: any,
}
export interface State {}

@inject("countersStore")
@observer
class BlankPage extends React.Component<Props, State> {
	state: {
		isReady: boolean,
	};
	constructor() {
		super();
		this.state = {
			isReady: false,
		};
	}


	doSomething() {
		const countz = this.props.countersStore;
		console.log(countz.getTotal);

	}


	componentWillMount(){

		// setTimeout(() => {
		//
		// 	// this.setState({
		// 	// 	isReady: true;
		// 	// });
		//
		// }), 3000);

	}

	render() {
		// const countersStore = this.props.countersStore;
		const param = this.props.navigation.state.params;
		const countz = this.props.countersStore;

		{console.log(countz);}

		let that = this;
 		setTimeout(function(){that.setState({isReady: true})}, 5000);

		const CountBtn = (
			<View>
			{/* <Text>Total Number Of Count: {countz.getTotal()}</Text> */}
			<Button onPress={() => countz.increase()} color="red" rounded><Text>Increase +</Text></Button>
			<Button onPress={() => countz.decrease()} rounded><Text>Decrease -</Text></Button>
			</View>
		);

		if (!this.state.isReady) {
			return <Expo.AppLoading/>;
		}
		if(this.state.isReady){


		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name.item : "Who We Are"}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>



					<Counter countersStore={CountBtn} computer={() => this.doSomething()} />

				</Content>
			</Container>
		);
		}
	}
}

export default BlankPage;
