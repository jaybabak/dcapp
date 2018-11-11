import * as React from "react";
import { View, ActivityIndicator, Modal } from "react-native";
import { Container, Header, Card, CardItem, Footer, Title, Content, Text, Button, Icon, Left, Right, Body, Toast } from "native-base";
import { observer, inject } from "mobx-react/native";


import Counter from "./counter";

import styles from "./styles";
export interface Props {
	navigation: any,
	countersStore: any,
	mainStore: any,
}
export interface State {}

@inject("countersStore", "mainStore")
@observer
class MyListings extends React.Component<Props, State> {
	state: {
		isReady: boolean,
	};
	constructor() {
		super();
		this.state = {
			isReady: false,
			modalVisible: false,
		};
	}

	doSomething() {
		const countz = this.props.countersStore;
		console.log(countz.getTotal);
				Toast.show({
					 text: 'Counter @: ' + countz.getTotal,
					 buttonText: "Ok"
				 })

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

	componentDidMount(){
		let that = this;
		setTimeout(function(){that.setState({isReady: true})}, 1000);
	}

	render() {
		const countersStore = this.props.countersStore;
		const home = this.props.mainStore;

		const param = this.props.navigation.state.params;
		const countz = this.props.countersStore;

		const CountBtn = (
			<View>
			{/* <Text>Total Number Of Count: {countz.getTotal()}</Text> */}
			<Button  style={styles.button} block onPress={() => countz.increase()} color="red" rounded><Text>Increase +</Text></Button>
			<Button style={styles.button} padder block onPress={() => countz.decrease()} rounded><Text>Decrease -</Text></Button>
			</View>
		);

		if (!this.state.isReady) {
			return (
				<View style={styles.centerMe}>
					<ActivityIndicator size="large" color="#435ccc"/>
				</View>
			);
		}

		if(this.state.isReady){


			if(!home.authenticated){
				return (
					<Container style={styles.container}>
						<Header>
							<Left>
								<Button transparent onPress={() => this.props.navigation.goBack()}>
									<Icon name="ios-arrow-back" />
								</Button>
							</Left>

							<Body style={{ flex: 3 }}>
								<Title>{param ? param.name.item : "Landing Page!"}</Title>
							</Body>

							<Right />
						</Header>

						<Content padder>
							<Body style={{ flex: 3, marginTop: 7, alignSelf: 'center' }}>
								<Text>You need to create an account before you can create a listing! Some additional information about why a user should sign up. Can be treated like a landing page with a link to the sign up form.</Text>

								<Button onPress={() => {

									this.setState({
										modalVisible: !this.state.modalVisible
									});

								}} style={{alignSelf: "flex-end"}} iconLeft transparent primary>
									{/* <Icon name='home' /> */}
									<Text>Click here to register as a merchant!</Text>
								</Button>

							</Body>

						</Content>
						<Footer>
							<Modal
								animationType="slide"
								transparent={false}
								visible={this.state.modalVisible}
								>

									 <Content style={{ marginTop: 110 }}>
										 <Card style={styles.mainCard}>
											 <CardItem header>
												 <Text>What it means to sign up as a merchant</Text>
											 </CardItem>
											 <CardItem>
												 <Body>
													 <Text>
														 Enter your email below to get sent instruction on how to recieve a free brochure.
													 </Text>
												 </Body>
											 </CardItem>
											 <CardItem footer>
												 <Text>The orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation.</Text>
											 </CardItem>

											 <Button block bordered

												 style={styles.cardBtn}
												 onPress={() => {


														this.setState({
															modalVisible: !this.state.modalVisible
														});

														Toast.show({
															text: "Woho! Please fill the form out to continue!",
															duration: 4000,
															position: "bottom",
															textStyle: { textAlign: "center" },
														});



												}}>
												<Text>Go To Sign-Up Form!</Text>
											</Button>

											 <Button block

												 style={styles.cardBtn}
												 onPress={() => {
													this.setState({
														modalVisible: !this.state.modalVisible
													});

												}}>
												<Text>Cancel</Text>
											</Button>
										</Card>
									 </Content>

							</Modal>
						</Footer>
					</Container>
				);
			}else {

				return (
					<Container style={styles.container}>
						<Header>
							<Left>
								<Button transparent onPress={() => this.props.navigation.goBack()}>
									<Icon name="ios-arrow-back" />
								</Button>
							</Left>

							<Body style={{ flex: 3 }}>
								<Title>{param ? param.name.item : "Becoming A Merchant"}</Title>
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
}

export default MyListings;
