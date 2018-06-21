import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class BlankPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name.item : "Who We Are"}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					<Text style={styles.h1}>ABOUT US</Text>
					<Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in lorem in tellus volutpat facilisis vel sed urna. Etiam aliquam vulputate sapien, vitae consequat ligula auctor et. Sed nec dui sagittis, pulvinar libero a, imperdiet erat. Ut eu nibh ut sapien viverra tincidunt. Suspendisse vulputate tellus bibendum justo convallis accumsan. Suspendisse porttitor augue eu dui ornare facilisis. Fusce pharetra, nulla in aliquam ultrices, libero urna sagittis urna, quis semper nulla leo vehicula sapien. Phasellus convallis bibendum odio, dapibus scelerisque mauris lacinia sed. Vestibulum pretium odio tempus felis lacinia, id sagittis purus efficitur. Vivamus egestas sed ligula nec imperdiet. In congue dapibus rutrum.</Text>
					<Text style={styles.h2}>Why We care</Text>
					<Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in lorem in tellus volutpat facilisis vel sed urna. Etiam aliquam vulputate sapien, vitae consequat ligula auctor et. Sed nec dui sagittis, pulvinar libero a, imperdiet erat. Ut eu nibh ut sapien viverra tincidunt. Suspendisse vulputate tellus bibendum justo convallis accumsan. Suspendisse porttitor augue eu dui ornare facilisis. Fusce pharetra, nulla in aliquam ultrices, libero urna sagittis urna, quis semper nulla leo vehicula sapien. Phasellus convallis bibendum odio, dapibus scelerisque mauris lacinia sed. Vestibulum pretium odio tempus felis lacinia, id sagittis purus efficitur. Vivamus egestas sed ligula nec imperdiet. In congue dapibus rutrum.</Text>

				</Content>
			</Container>
		);
	}
}

export default BlankPage;
