import * as React from "react";
import { Image } from "react-native";
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

@inject("mainStore")
@observer
class Dashboard extends React.Component<Props, State> {

  componentDidMount(){


    // console.log
    const home = this.props.mainStore;

    home.getSecretStuff()

  }

  render() {

    const home = this.props.mainStore;

    return (
      <Container style={styles.container}>

        <Content padder>
          <Image
            resizeMode={Image.resizeMode.contain}
            source={{ uri: home.getProfileImage }}
            style={{ width: 50, height:50 }}
          />
          <Text>Authenticated Dashboard: You are viewing seceret content.</Text>
        </Content>
      </Container>
    );
  }
}

export default Dashboard;
