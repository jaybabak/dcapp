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

import UserGreeting from "../UserGreeting/";
import Dashboard from "./components/dashboard";

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
  mainStore: any,
}
export interface State {}

@inject("mainStore")
@observer
class Home extends React.Component<Props, State> {


  componentDidMount(){


    // console.log
    const home = this.props.mainStore;

  }

  render() {

    const home = this.props.mainStore;
    // console.log(home.userAuthenticated);
    var isUserLoggedIn = null;

    if(this.props.navigation.state.params){

      // console.log(this.props.navigation.state.params);

      const param = this.props.navigation.state.params;
      //
      if(param.status == true){
        greeting = <Subtitle>Hello {param.name}!</Subtitle>;
        greeting = <Button disabled block><Text>Hello {param.name}!</Text></Button>;
      }

    }else {
      // greeting = <Subtitle>Hello Stranger!</Subtitle>;
      greeting = <Button disabled block><Text>Hello Stranger!</Text></Button>
    }


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
          <UserGreeting/>
          { home.authenticated ? (
            //screen for authenticated users
            <Dashboard/>
          ) : (
            //screen for anonymous users
            <Card style={styles.mainCard}>
              <CardItem>
                <Body>
                  <Text style={styles.subtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac felis nec nisl tincidunt aliquam. Donec aliquet nulla nisl, ac lacinia nibh porta ut. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac felis nec nisl tincidunt aliquam. Donec aliquet nulla nisl, ac lacinia nibh porta ut. Nulla facilisi. </Text>
                </Body>
              </CardItem>
            </Card>
          )
          }
        </Content>
      </Container>
    );
  }
}

export default Home;
