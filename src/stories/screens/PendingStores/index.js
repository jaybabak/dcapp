import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Card,
  CardItem,
  Text,
  H1,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Subtitle,
  H3,
  Thumbnail,
  Footer
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
      store: [],
      modalVisible: false,
      selectedStore: '',
    };

    this.openModal = this.openModal.bind(this);
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
        store: items,
      })

      // console.log(that.state.store);

    }, function(err){

      console.log(err);

    });

  }

  openModal = (theStore) => {

    // console.log('Modal open!!');
    // console.log(theStore);

    var StoreArray = '';
    StoreArray = theStore;

    this.setState({
      modalVisible: !this.state.modalVisible,
      selectedStore: StoreArray
    }, function () {
        console.log(this.state)
    });
  }

  updateStore = (theStore) => {

    console.log('Updating store....');
    console.log(theStore);


    const adminStore = this.props.adminStore;
    const home = this.props.mainStore;

    console.log(home.token);
    console.log(theStore._id);

    var updateStoreReq = adminStore.updateStore(home.token, theStore._id, theStore);


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
    // console.log(this.state.store);
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
            <Button transparent onPress={() => this.openModal(store)}>
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
      )
    });

    var storeList = (
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
            <Title>View Stores</Title>
          </Body>
        	<Right />
        </Header>
        <Content>
          {storeList}
        </Content>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            >
            <Content style={{ marginTop: 20, padding: 20 }}>
              <Card>
                <CardItem header>
                  <H1>{ this.state.selectedStore.name ? this.state.selectedStore.name : "Store Name"}</H1>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>Status:
                      { this.state.selectedStore.status ? "Approved!" : " Pending"}
                    </Text>

                    <Text style={{ marginTop: 20}}>
                      Email:
                    </Text>
                    <Text>
                      { this.state.selectedStore.businessEmail ? this.state.selectedStore.businessEmail : "info@business.com"}
                    </Text>

                    <Text style={{ marginTop: 20}}>
                      Description:
                    </Text>
                    <Text>
                      { this.state.selectedStore.description ? this.state.selectedStore.description : "Store description will definitely appear here...sooner or later!"}
                    </Text>

                    <Text style={{ marginTop: 20}}>
                      Address:
                    </Text>
                    <Text>
                      { this.state.selectedStore.address ? `${this.state.selectedStore.address.address},  ${this.state.selectedStore.address.address2}` : "1234 La La La St."}
                    </Text>
                    <Text style={{ marginTop: 5}}>
                      Latitude/Longitude:
                    </Text>
                    <Text>
                      { this.state.selectedStore.address ? `${this.state.selectedStore.address.lat},   ${this.state.selectedStore.address.long}` : "[23.87, 58,321]"}
                    </Text>

                    <Text style={{ marginTop: 20}}>
                      Phone Number:
                    </Text>
                    <Text>
                      { this.state.selectedStore.phoneNumber ? this.state.selectedStore.phoneNumber : "(001)-824-2345"}
                    </Text>

                    <Text style={{ marginTop: 20}}>
                      Service Fee (Qatari Riyal):
                    </Text>
                    <Text>
                      { this.state.selectedStore.serviceFee ? `${this.state.selectedStore.serviceFee} QAR` : "5 QAR"}
                    </Text>

                  </Body>
                </CardItem>
                <CardItem footer button onPress={() => this.updateStore(this.state.selectedStore)}>
                  <Text style={{ fontWeight: "700", color: "#2CABFB"}}>Change Status To Approved</Text>
                </CardItem>
              </Card>
              <Button full block
                 style={styles.cardBtn}
                 onPress={() => {
                  this.setState({
                    modalVisible: !this.state.modalVisible
                  });
                }}>
                <Text>Cancel</Text>
              </Button>
            </Content>
          </Modal>
      </Container>
    );
  }
}

export default PendingStores;
