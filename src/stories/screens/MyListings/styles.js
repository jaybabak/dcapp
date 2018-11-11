import { StyleSheet } from "react-native";

const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#FBFAFA",
		// marginBottom: 40
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
		borderRadius: 25,
		marginLeft: 10,
		marginRight: 10
	}

});
export default styles;
