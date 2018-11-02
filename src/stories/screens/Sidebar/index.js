import * as React from "react";
import { Text, Container, List, ListItem, Content } from "native-base";
import { NavigationActions } from "react-navigation";
import { observer, inject } from "mobx-react/native";

export interface Props {
	navigation: any,
	mainStore: any,
}
export interface State {}
const resetAction = NavigationActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: "Login" })],
});

@inject("mainStore")
@observer


///Left off HERE - TRYING TO REMOVE LOG OUT LINK FOR ANONYMOUS USERS

export default class Sidebar extends React.Component<Props, State> {

	render() {

		const home = this.props.mainStore;

		//Template and Sidebar Navigation Routes for sidebar nav
		const routes = [
			{
				route: "Home",
				caption: "Home",
			},
			{
				route: "BlankPage",
				caption: "Who We Are",
			},
			{
				route: "Login",
				caption: home.authenticated ? "Logout" : "Register / Login",
			},
		];

		return (
			<Container>
				<Content>
					<List
						style={{ marginTop: 40 }}
						dataArray={routes}
						renderRow={data => {
							return (
								<ListItem
									button
									onPress={() => {
										data.route === "Login"
											? this.props.navigation.dispatch(resetAction)
											: this.props.navigation.navigate(data.route);
									}}
								>
									<Text>{data.caption}</Text>
								</ListItem>
							);
						}}
					/>
				</Content>
			</Container>
		);
	}
}
