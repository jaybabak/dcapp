import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Subtitle
} from "native-base";
import { observer, inject } from "mobx-react/native";

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
  mainStore: any,
}
export interface State {}

class Dashboard extends React.Component<Props, State> {


  componentDidMount(){


    // console.log
    const home = this.props.mainStore;

		// console.log(home.userAuthenticated);

  }

  render() {

    return (
      <Container style={styles.container}>

        <Content padder>
          <Text>Authenticated Dashboard: You are viewing seceret content.</Text>
        </Content>
      </Container>
    );
  }
}

export default Dashboard;
