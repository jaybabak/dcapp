// @flow
import * as React from "react";
import { observer, inject } from "mobx-react/native";
import { Keyboard, View } from "react-native";

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
	componentWillMount() {
		// this.props.mainStore.fetchItems(data);
	}

	componentDidMount() {

		const adminStore = this.props.adminStore;
		console.log(adminStore.items);
		// home.toggleAuthenticateStatus()
		// console.log(home.getToken);

	}

	render() {
		// const list = this.props.mainStore.items.toJS();
		return <PendingStores navigation={this.props.navigation} />;
	}
}
