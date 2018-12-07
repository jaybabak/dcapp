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
  H3,
  Thumbnail
} from "native-base";
import { observer, inject } from "mobx-react/native";
import { View, ActivityIndicator, Modal } from "react-native";

import styles from "./styles";

export interface Props {
  navigation: any;
  list: any;
  mainStore: any,
  adminStore: any,
  pending: any,
}
export interface State {}

@inject("mainStore","adminStore")
@observer
class PendingStores extends React.Component<Props, State> {

  constructor() {
    super();
    this.state = {
      isReady: false,
      store: []
    };
  }


  componentDidMount(){

    const adminStore = this.props.adminStore;
    const home = this.props.mainStore;
    // console.log(adminStore.items);
    // home.toggleAuthenticateStatus()
    // console.log(home.token);

    var getPendingStores = adminStore.fetchItems(home.token);

    // console.log(getPendingStores);

    let that = this;

    getPendingStores.then(function(result){

      // console.log(result);

      var items = [];
      items = result.slice();
      // console.log(items);

      that.setState({
        isReady: true,
        store: items
      })

      // console.log(that.state.store);

    }, function(err){

      console.log(err);

    });


  }

  render() {


    if (!this.state.isReady) {
      return (
        <View style={styles.centerMe}>
          <ActivityIndicator size="large" color="#435ccc"/>
        </View>
      );
    }

    // const home = this.props.mainStore;
    // const adminStore = this.props.adminStore;
    //
    console.log(this.state.store);
    var stores = this.state.store;


    const storeRows = stores.map((store) => {
      return (
        <ListItem avatar key={store._id}>
          <Left>
            <Thumbnail source={{ uri: 'http://phot0x.com/sites/default/files/styles/promo_image/public/2018-08/2Artboard%201%20copy%204%40lmood.png' }} />
          </Left>
          <Body>
            <Text>{store.name}</Text>
            <Text note>{store.description}</Text>
          </Body>
          <Right>
            <Text note>{store.status}</Text>
          </Right>
        </ListItem>
      )
    });

    var storeRow = (
          <List>
              {storeRows}
          </List>
        )

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
          {storeRow}
        </Content>
      </Container>
    );
  }
}

export default PendingStores;
