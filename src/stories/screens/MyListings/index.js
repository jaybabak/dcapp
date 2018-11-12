import * as React from "react";
import { View, ActivityIndicator, Modal } from "react-native";
import { Container, Header, Card, CardItem, Footer, Form, Label, Title, Content, Item, Input, Text, Button, Icon, Left, Right, Body, Toast } from "native-base";
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
		businessNameInput: string,
		businessAddressInput: string,
	};
	constructor() {
		super();
		this.state = {
			isReady: false,
			modalVisible: false,
		};
	}

	submitListing() {
		const countz = this.props.countersStore;

		Toast.show({
			 text: 'Form not completed!',
			 buttonText: "Ok"
		 })

	}

	toggleHelp = () => {

		Toast.show({
			text: "Some Helpful Message About The Form Field With Error",
			duration: 4000,
			position: "bottom",
			textStyle: { textAlign: "center" },
		});
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
		setTimeout(function(){that.setState({isReady: true})}, 700);
	}

	render() {
		const countersStore = this.props.countersStore;
		const home = this.props.mainStore;

		const param = this.props.navigation.state.params;

		const CountBtn = (
			<View>
			<Text style={{fontWeight: 'bold', marginTop: 12}}>We're glad you decided to join us!</Text>
			<Text style={{marginTop: 12, marginBottom: 12}}>Your store listing will be in pending until approval. Once approved, other will be able to see your listing!</Text>

			<Form>
				<Item inlineLabel last rounded
					error={countersStore.businessNameValid}
					style={styles.textWrapper}
					>
					<Label>Business Name:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businesNameChange(event)}
						value={countersStore.businessName}
						// onBlur={true}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.businessAddressValid}
					style={styles.textWrapper}
					>
					<Label>Business Address:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businesAddressChange(event)}
						value={countersStore.businessAddress}
						// onBlur={true}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.businessAddress2Valid}
					style={styles.textWrapper}
					>
					<Label>(Additional Directions)</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businesAddress2Change(event)}
						value={countersStore.businessAddress2}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>

				<Item inlineLabel last rounded
					error={countersStore.businessPhoneValid}
					style={styles.textWrapper}
					>
					<Label>Phone Number:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businessPhoneChange(event)}
						value={countersStore.businessPhone}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>

				<Item inlineLabel last rounded
					error={countersStore.businessFeeValid}
					style={styles.textWrapper}
					>
					<Label>Service Fee:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businessFeeChange(event)}
						value={countersStore.businessFee}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>

				<Item inlineLabel last rounded
					error={countersStore.businessEmailValid}
					style={styles.textWrapper}
					>
					<Label>Email Address:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businessEmailChange(event)}
						value={countersStore.businessEmail}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>

				<Item inlineLabel last rounded
					error={countersStore.minimumOrderValid}
					style={styles.textWrapper}
					>
					<Label>Minimum Order Quantity:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.minimumOrderChange(event)}
						value={countersStore.minimumOrder}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
			</Form>


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


			// if(!home.authenticated){
			if(home.authenticated){
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

						<Content style={styles.contentWrapper} padder>

							<Counter countersStore={CountBtn} computer={() => this.submitListing()} />

						</Content>

					</Container>
				);

			}



	}
	}
}

export default MyListings;
