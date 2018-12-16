import { StyleSheet } from "react-native";

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#FBFAFA",
		// paddingBottom: 40
	},
	h1: {
		fontSize: 36,
		textAlign: 'center',
		marginTop: 30,
	},
	h2: {
		fontSize: 24,
		textAlign: 'left',
		marginTop: 15,
		marginLeft: 10,
		marginRight: 10,
	},
	body: {
		fontSize: 14,
		marginTop: 30,
		textAlign: 'left',
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 15,
	},
	centerMe: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		marginTop: 14,
	},
	mainCard: {
		// fontSize: 18,
		marginTop: 25,
		marginLeft: 15,
		marginRight: 15,
		paddingBottom: 25
	},
	cardBtn: {
		marginTop: 12,
		marginBottom: 32,
		borderRadius: 25,
		marginLeft: 10,
		marginRight: 10
	},
	inlineIconForField: {
		backgroundColor: 'transparent',
	},
	eyeIcon: {
		color: '#102D64',
	},
	helpIcon: {
		color: '#102D64',
		marginRight: 20
	},
	textWrapper: {
		// borderBottomWidth: 3,
		// height: 40,
		marginTop: 15
		// borderWidth: 1,
		// borderColor: '#102D64',
		// marginTop: 6,
	},
	dropDown: {
		paddingLeft: 0,
		// height: 40,

		// marginTop: 6,
	},
	formFeedbackText: {
		alignSelf: 'center',
		fontSize: 14,
		marginTop: 5,
		color: 'red',
	},
	submitBtn: {
		marginTop: 25,
		marginBottom: 25,
		borderRadius: 25
	},
	label: {
		marginTop: 10,
		marginLeft: 15,
		color: '#666462'
	},
	contentWrapper: {

	},
	textArea: {
		borderRadius: 15
	},
	textLabel: {
		marginTop: 15
	},
	radio: {
		color: '#2CABFB'
	}

});
export default styles;
