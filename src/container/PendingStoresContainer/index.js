// @flow
import * as React from "react";
import { observer, inject } from "mobx-react/native";
import { Keyboard, View, ActivityIndicator } from "react-native";

import PendingStores from "../../stories/screens/PendingStores";
import data from "./data";

export interface Props {
	navigation: any,
	mainStore: any,
	adminStore: any,
}
export interface State {}

@inject("mainStore","adminStore")
@observer
export default class PendingStoresContainer extends React.Component<Props, State> {

	componentDidMount = () => {

		const adminStore = this.props.adminStore;
		const home = this.props.mainStore;
		// console.log(adminStore.items);
		// home.toggleAuthenticateStatus()
		// console.log(home.token);

		// var getPendingStores = adminStore.fetchItems(home.token);
		//
		// getPendingStores.then(function(result){
		//
		// 	// console.log(result);
		//
		//
		// }, function(err){
		//
		// 	console.log(err);
		//
		// });



	}

	render() {
		// const list = this.props.mainStore.items.toJS();
		return <PendingStores navigation={this.props.navigation}/>;
	}
}
