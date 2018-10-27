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
            // <ListItem itemDivider>
            //   <Text>You are now logged in...!</Text>
            // </ListItem>
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

             //^^caused warning check for it


            // <List>
            //   {this.props.list.map((item, userType) => (
            //     <ListItem
            //       key={userType}
            //       onPress={() => {
            //         const consumer = 0;
            //         const merchant = 1;
            //         if(userType == consumer){
            //           //consumer
            //           this.props.navigation.navigate("SignUp", {
            //             title: 'Register!',
            //             type: 'consumer'
            //           })
            //         }else if(userType == merchant){
            //           //business
            //           this.props.navigation.navigate("SignUp", {
            //             title: 'Register!',
            //             type: 'merchant'
            //           });
            //         }
            //
            //     }}
            //     >
            //       <Text>{item}</Text>
            //     </ListItem>
            //   ))}
            // </List>
          )
          }
        </Content>
      </Container>
    );
  }
}

export default Home;
