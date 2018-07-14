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
  Subtitle,
  H1
} from "native-base";
import { observer, inject } from "mobx-react/native";

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}

@inject("mainStore")
@observer
class UserGreeting extends React.Component<Props, State> {


  componentDidMount(){

  }

  render() {

    const home = this.props.mainStore;
    // console.log(home);

    return (
      <ListItem itemDivider>
        <Text style={styles.name}><H1>Welcome {home.getName}!</H1></Text>
      </ListItem>
    );
  }
}

export default UserGreeting;
