// @flow
import * as React from "react";
import MyListings from "../../stories/screens/MyListings";
export interface Props {
	navigation: any,
}
export interface State {}
export default class BlankPageContainer extends React.Component<Props, State> {
	render() {
		return <MyListings navigation={this.props.navigation} />;
	}
}
