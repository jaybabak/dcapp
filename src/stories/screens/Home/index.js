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
  ListItem
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
  render() {
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
          <List>
            {this.props.list.map((item, userType) => (
              <ListItem
                key={userType}
                onPress={() => {
                  const consumer = 0;
                  const merchant = 1;
                  if(userType == consumer){
                    //consumer
                    this.props.navigation.navigate("SignUp", {
                      title: "Register",
                      type: "consumer"
                    })
                  }else if(userType == merchant){
                    //business
                    this.props.navigation.navigate("SignUp", {
                      title: "Merchant Registeration",
                      type: "merchant"
                    })
                  }else {
                    this.props.navigation.navigate("Home")
                  }

              }}
              >
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default Home;
