import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Subtitle,
  H3
} from "native-base";
import { observer, inject } from "mobx-react/native";

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
  mainStore: any,
}
export interface State {}

@inject("mainStore")
@observer
class PendingStores extends React.Component<Props, State> {


  componentDidMount(){

    const home = this.props.mainStore;

  }

  render() {

    const home = this.props.mainStore;

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>Hello Test!</Text>
        </Content>
      </Container>
    );
  }
}

export default PendingStores;
