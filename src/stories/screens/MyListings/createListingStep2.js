import * as React from "react";
import { Container, Header, Title, Form, Item, Label, Input, Content, Text, Button, Icon, Left, Right, Body, Footer, Toast, FooterTab } from "native-base";
import { View, AlertIOS, Alert, TextInput } from 'react-native';
import { observer, inject } from "mobx-react/native";

import styles from "./styles";
export interface Props {
	navigation: any,
	countersStore: any,
}
export interface State {}

@inject("countersStore", "mainStore")
@observer
class CreateListingStep2 extends React.Component<Props, State> {

	submit = () => {

		const home = this.props.mainStore;
		const countersStore = this.props.countersStore;

		countersStore.submitForm(home);

	}

	toggleHelp = () => {

		Toast.show({
			text: "Some Helpful Message About The Form Field With Error",
			duration: 4000,
			position: "bottom",
			textStyle: { textAlign: "center" },
		});
	}

	render() {

		const countersStore = this.props.countersStore;

		const SecondStepForm = (
			<Form>
				<Item inlineLabel last rounded
					error={countersStore.businessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Monday - OPEN:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businessHoursChange(event, 'monday', 'open')}
						value={countersStore.businessHours.monday.open}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.businessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Monday - CLOSE:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businessHoursChange(event, 'monday', 'close')}
						value={countersStore.businessHours.monday.close}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.businessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Tuesday - OPEN:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businessHoursChange(event, 'tuesday', 'open')}
						value={countersStore.businessHours.tuesday.open}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.businessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Tuesday - CLOSE:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businessHoursChange(event, 'tuesday', 'close')}
						value={countersStore.businessHours.tuesday.close}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>

				<Item inlineLabel last rounded
					error={countersStore.businessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Wednesday - OPEN:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businessHoursChange(event, 'wednesday', 'open')}
						value={countersStore.businessHours.wednesday.open}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.businessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Wednesday - CLOSE:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businessHoursChange(event, 'wednesday', 'close')}
						value={countersStore.businessHours.wednesday.close}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>

				<Item inlineLabel last rounded
					error={countersStore.businessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Thursday - OPEN:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businessHoursChange(event, 'thursday', 'open')}
						value={countersStore.businessHours.thursday.open}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.businessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Thursday - CLOSE:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businessHoursChange(event, 'thursday', 'close')}
						value={countersStore.businessHours.thursday.close}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>

				<Item inlineLabel last rounded
					error={countersStore.businessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Friday - OPEN:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businessHoursChange(event, 'friday', 'open')}
						value={countersStore.businessHours.friday.open}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.businessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Friday - CLOSE:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businessHoursChange(event, 'friday', 'close')}
						value={countersStore.businessHours.friday.close}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.businessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Saturday - OPEN:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businessHoursChange(event, 'saturday', 'open')}
						value={countersStore.businessHours.saturday.open}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.businessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Saturday - CLOSE:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businessHoursChange(event, 'saturday', 'close')}
						value={countersStore.businessHours.saturday.close}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.businessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Sunday - OPEN:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businessHoursChange(event, 'sunday', 'open')}
						value={countersStore.businessHours.sunday.open}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.businessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Sunday - CLOSE:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.businessHoursChange(event, 'sunday', 'close')}
						value={countersStore.businessHours.sunday.close}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>

			</Form>
		);


		return (



			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>Almost There!</Title>
					</Body>

					<Right />
				</Header>

				<Content style={styles.contentWrapper} padder>
					<View>

						{SecondStepForm}

						<Button bordered onPress={this.submit} style={styles.submitBtn} color="red" block ><Text>Submit!</Text></Button>
					</View>

				</Content>

			</Container>


		);
	}
}

export default CreateListingStep2;
