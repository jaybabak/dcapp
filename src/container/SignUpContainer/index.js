// @flow
import * as React from "react";
import SignUp from "../../stories/screens/SignUp";
export interface Props {
	navigation: any,
}
export interface State {}
export default class SignUpContainer extends React.Component<Props, State> {
	render() {
		return <SignUp navigation={this.props.navigation} />;
	}
}
