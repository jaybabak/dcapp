import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Footer, Toast, FooterTab, Form, Item, Label, Input, ListItem, CheckBox, Picker } from "native-base";
import { View, Alert, TextInput } from 'react-native';
import { observer, inject } from "mobx-react/native";

import styles from "./styles";
export interface Props {
	navigation: any,
	signUpStore: any,
	mainStore: any,
}
export interface State {}

@inject("signUpStore", "mainStore")
@observer
class ConsumerSignUpStep2 extends React.Component<Props, State> {

	toggleHelp = () => {

		const signers = this.props.signUpStore;
		const home = this.props.mainStore;

		Toast.show({
			text: "Some Helpful Message About The Form Field With Error",
			duration: 4000,
			position: "bottom",
			textStyle: { textAlign: "center" },
		});
	}

	confirmSignUp = () => {

		const signers = this.props.signUpStore;
		const home = this.props.mainStore;

		if(signers.validateForm == true){

			return;
		}

		signers.submitForm(this.props.navigation);
	}

	render() {

		const signer = this.props.signUpStore;
		console.log(signer);
		var signupForm =
					<Form>
							<Item inlineLabel last rounded
								error={signer.addressNameValid}
								style={styles.textWrapper}
								>
							<Label>Address Name:</Label>
							<Input
								style={styles.textField}
								onChangeText={event => signer.addressNameChange(event)}
								value={signer.addressName}
								// onBlur={signer.submitForm}
							/>
							<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
								<Icon style={styles.helpIcon} size={40} name='help' />
							</Button>
						</Item>

						<Item inlineLabel last rounded picker
							error={signer.addressTypeValid}
							style={styles.textWrapper}>
							<Label>Type:</Label>
						 <Picker
							 mode="dropdown"
							 iosIcon={<Icon name="ios-arrow-down-outline" />}
							 style={styles.dropDown}
							 placeholder="Home, Office or Apartment?"
							 placeholderStyle={{ color: "#BCBCBC" }}
							 placeholderIconColor="#007aff"
							 selectedValue={signer.addressType}
							 onValueChange={signer.addressTypeChange}
						 >
							 <Picker.Item label="Home" value="Home" />
							 <Picker.Item label="Apartment" value="Apartment" />
							 <Picker.Item label="Office" value="Office" />
						 </Picker>
						 <Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
							 <Icon style={styles.helpIcon} size={40} name='help' />
						 </Button>
					 </Item>

						<Item inlineLabel last rounded
							error={signer.streetValid}
							style={styles.textWrapper}
							>
							<Label>Street:</Label>
							<Input
								style={styles.textField}
								onChangeText={event => signer.streetChange(event)}
								value={signer.street}
								// onBlur={signer.submitForm}
							/>
							<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
								<Icon style={styles.helpIcon} size={40} name='help' />
							</Button>
						</Item>

						<Item inlineLabel last rounded
							error={signer.buildingNameValid}
							style={styles.textWrapper}
							>
							<Label>Building Name:</Label>
							<Input
								style={styles.textField}
								onChangeText={event => signer.buildingNameChange(event)}
								value={signer.buildingName}
								// onBlur={signer.submitForm}
							/>
							<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
								<Icon style={styles.helpIcon} size={40} name='help' />
							</Button>
						</Item>

						<Item inlineLabel last rounded
							error={signer.floorValid}
							style={styles.textWrapper}
							>
							<Label>Office/Apartment Floor:</Label>
							<Input
								style={styles.textField}
								onChangeText={event => signer.floorChange(event)}
								value={signer.floor}
								// onBlur={signer.submitForm}
							/>
							<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
								<Icon style={styles.helpIcon} size={40} name='help' />
							</Button>
						</Item>

						<Item inlineLabel last rounded
							error={signer.additionalDirectionsValid}
							style={styles.textWrapper}
							>
							<Label>Additional Directions:</Label>
							<Input
								style={styles.textField}
								onChangeText={event => signer.pwdChange(event)}
								value={signer.password}
								// onBlur={signer.submitForm}
							/>
							<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
								<Icon style={styles.helpIcon} size={40} name='help' />
							</Button>
						</Item>

						<Item inlineLabel last rounded
							error={signer.mobileNumberValid}
							style={styles.textWrapper}
							>
							<Label>Mobile Number:</Label>
							<Input
								style={styles.textField}
								onChangeText={event => signer.pwdChange(event)}
								value={signer.password}
								// onBlur={signer.submitForm}
							/>
							<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
								<Icon style={styles.helpIcon} size={40} name='help' />
							</Button>
						</Item>
						<ListItem>
							<CheckBox schecked={true} color="blue"/>
							<Body>
								<Text>Save this as my preferred address</Text>
							</Body>
						</ListItem>

						<Button onPress={this.confirmSignUp} style={styles.submitBtn} color="red" block ><Text>Register!</Text></Button>
					</Form>;

		return (

			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>Tell Us About Yourself</Title>
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

export default ConsumerSignUpStep2;
