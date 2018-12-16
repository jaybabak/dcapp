import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Card,
  CardItem,
  Form,
  Text,
  H1,
  Button,
  Icon,
  Item,
  Input,
  Label,
  Left,
  Body,
  Right,
  Picker,
  List,
  ListItem,
  Subtitle,
  H3,
  Toast,
  Textarea,
  Thumbnail,
  Footer,
  Radio
} from "native-base";
import { observer, inject } from "mobx-react/native";
import { View, ActivityIndicator, Modal } from "react-native";

import styles from "./styles";

export interface Props {
  navigation: any;
  list: any;
  mainStore: any,
  adminStore: any,
  countersStore: any,
  pending: any,
}
export interface State {}

@inject("mainStore","adminStore","countersStore")
@observer
class PendingStores extends React.Component<Props, State> {

  constructor() {
    super();
    this.state = {
      isReady: false,
      store: [],
      modalVisible: false,
      editStoreModalVisible: false,
      dialogVisibile: false,
      selectedStore: '',
      selected2: undefined,
      viewApproved: false,
      itemSelected: 'itemTwo',
    };

    this.openModal = this.openModal.bind(this);
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  componentDidMount(){

    const adminStore = this.props.adminStore;
    const home = this.props.mainStore;

    var getPendingStores = adminStore.fetchItems(home.token);

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

  toggleHelp = () => {

    Toast.show({
      text: "Some Helpful Message About The Form Field With Error",
      duration: 4000,
      position: "bottom",
      textStyle: { textAlign: "center" },
    });
  }

  selectStoreType = (events) => {
    this.setState({ itemSelected: events }, function(){
      // console.log(this.state.itemSelected);
    })

    const adminStore = this.props.adminStore;
    const home = this.props.mainStore;

    var storeStatus = this.state.itemSelected;

    if(this.state.itemSelected == 'itemTwo'){
      storeStatusPendin = true;
    }else if(this.state.itemSelected == 'itemOne'){
      storeStatus = false;
    }

    // var getPendingStores = adminStore.fetchItems(home.token, storeStatus);
    //
    // let that = this;
    //
    // getPendingStores.then(function(result){
    //
    //   // console.log(result);
    //
    //   var items = [];
    //   items = result.slice();
    //   // console.log(items);
    //
    //   that.setState({
    //     isReady: true,
    //     store: items,
    //   })
    //
    //   // console.log(that.state.store);
    //
    // }, function(err){
    //
    //   console.log(err);
    //
    // });


  }

  openModal = (theStore) => {

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

    this.setState({
      modalVisible: !this.state.modalVisible,
      editStoreModalVisible: !this.state.editStoreModalVisible
    })


  }

  saveStoreUpdates = (theStore) => {

    // this.setState({
    //   editStoreModalVisible: !this.state.editStoreModalVisible
    // })

    const adminStore = this.props.adminStore;
    const home = this.props.mainStore;
    const countersStore = this.props.countersStore;

    // console.log(theStore);

    var updateStoreReq = countersStore.updateStore(home.token, theStore._id, theStore, theStore.uid);
    // console.log(updateStoreReq);
    let that = this;

    updateStoreReq.then(function(data){

      console.log(data);
      if(data.success == true){
        that.setState({
          editStoreModalVisible: !that.state.editStoreModalVisible
        })
      }

    });
  }

  render() {

    //------------------//
    //---------------//
    //------------------- Update FORM START -----//
    //------------------//
    //---------------//
    const countersStore = this.props.countersStore;



    const EditForm = (
			<Form>

        <Text style={styles.label}>
          { this.state.selectedStore.status ? `${this.state.selectedStore.address.address}` : "Status: Pending"}
        </Text>
        <Item inlineLabel last rounded
          style={styles.textWrapper}
          >
          <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Change status"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={countersStore.updatedStatus ? "true" : "false"}
                  onValueChange={event => countersStore.updateStoreStatus(event)}
                >
                  <Picker.Item label="Accepted" value="true" />
                  <Picker.Item label="Pending" value="false" />
                </Picker>
        </Item>


        <Label style={styles.label}>Company Name: { this.state.selectedStore.name ? this.state.selectedStore.name : "Business Name"}</Label>
        <Item inlineLabel last rounded
          error={countersStore.updatedBusinessNameValid}
          style={styles.textWrapper}
          >
          <Input
            style={styles.textField}
            onChangeText={event => countersStore.updatedBusinesNameChange(event)}
            value={countersStore.updatedBusinessName}
            placeholder="..."
            // onBlur={true}
          />
          <Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
            <Icon style={styles.helpIcon} size={40} name='help' />
          </Button>
        </Item>

        <Label style={styles.label}>Business Description:</Label>
        <Textarea rowSpan={5} bordered
          style={styles.textArea}
          onChangeText={event => countersStore.updatedBusinesDescriptionChange(event)}
          value={countersStore.updatedBusinessDescription}
          placeholder={ this.state.selectedStore.description ? this.state.selectedStore.description : "Store description will definitely appear here...sooner or later!"} />

        {/* </Item> */}
        <Text style={styles.label}>
          { this.state.selectedStore.address ? `${this.state.selectedStore.address.address}` : "1234 La La La St."}
        </Text>
        <Item inlineLabel last rounded
          error={countersStore.updatedBusinessAddressValid}
          style={styles.textWrapper}
          >
          <Label>Address:</Label>

          <Input
            style={styles.textField}
            onChangeText={event => countersStore.updatedBusinesAddressChange(event)}
            // value={countersStore.businessAddress}
            value={countersStore.updatedBusinessAddress}
            placeholder="Street name"
          />
          <Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
            <Icon style={styles.helpIcon} size={40} name='help' />
          </Button>
        </Item>

        <Text style={styles.label}>
          { this.state.selectedStore.address ? `${this.state.selectedStore.address.address2}` : "1234 La La La St."}
        </Text>
        <Item inlineLabel last rounded
          error={countersStore.updatedBusinessAddress2Valid}
          style={styles.textWrapper}
          >
          <Label>Address(2):</Label>
          <Input
            style={styles.textField}
            onChangeText={event => countersStore.updatedBusinesAddress2Change(event)}
            value={countersStore.updatedBusinessAddress2}
            // onBlur={countersStore.submitForm}
          />
          <Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
            <Icon style={styles.helpIcon} size={40} name='help' />
          </Button>
        </Item>

        <Text style={styles.label}>
          { this.state.selectedStore.phoneNumber ? `${this.state.selectedStore.phoneNumber}` : "(647)-542-3488"}
        </Text>
        <Item inlineLabel last rounded
          error={countersStore.updatedBusinessPhoneValid}
          style={styles.textWrapper}
          >
          <Label>Phone#:</Label>
          <Input
            style={styles.textField}
            onChangeText={event => countersStore.updatedBusinessPhoneChange(event)}
            value={countersStore.updatedBusinessPhone}
            // onBlur={countersStore.submitForm}
          />
          <Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
            <Icon style={styles.helpIcon} size={40} name='help' />
          </Button>
        </Item>

        <Text style={styles.label}>
          { this.state.selectedStore.serviceFee ? `${this.state.selectedStore.serviceFee} QAR` : "5 QAR"}
        </Text>
        <Item inlineLabel last rounded
          error={countersStore.updatedBusinessFeeValid}
          style={styles.textWrapper}
          >
          <Label>Service Fee:</Label>
          <Input
            style={styles.textField}
            onChangeText={event => countersStore.updatedBusinessFeeChange(event)}
            value={countersStore.updatedBusinessFee}
            // onBlur={countersStore.submitForm}
          />
          <Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
            <Icon style={styles.helpIcon} size={40} name='help' />
          </Button>
        </Item>

        <Text style={styles.label}>
          { this.state.selectedStore.businessEmail ? this.state.selectedStore.businessEmail : "info@business.com"}
        </Text>
        <Item inlineLabel last rounded
          error={countersStore.updatedBusinessEmailValid}
          style={styles.textWrapper}
          >
          <Label>Email:</Label>
          <Input
            style={styles.textField}
            onChangeText={event => countersStore.updatedBusinessEmailChange(event)}
            value={countersStore.updatedBusinessEmail}
            // onBlur={countersStore.submitForm}
          />
          <Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
            <Icon style={styles.helpIcon} size={40} name='help' />
          </Button>
        </Item>

        <Text style={styles.label}>
          { this.state.selectedStore.minimumOrder ? `Current minimum: ${this.state.selectedStore.minimumOrder}` : "E.g: 2"}
        </Text>
        <Item inlineLabel last rounded
          error={countersStore.updatedMinimumOrderValid}
          style={styles.textWrapper}
          >
          <Label>Min. Order Quantity:</Label>
          <Input
            style={styles.textField}
            onChangeText={event => countersStore.updatedMinimumOrderChange(event)}
            value={countersStore.updatedMinimumOrder}
            // onBlur={countersStore.submitForm}
          />
          <Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
            <Icon style={styles.helpIcon} size={40} name='help' />
          </Button>
        </Item>


				<Item inlineLabel last rounded
					error={countersStore.updatedBusinessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Monday - OPEN:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.updatedBusinessHoursChange(event, 'monday', 'open')}
						value={countersStore.updatedBusinessHours.monday.open}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.updatedBusinessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Monday - CLOSE:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.updatedBusinessHoursChange(event, 'monday', 'close')}
						value={countersStore.updatedBusinessHours.monday.close}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.updatedBusinessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Tuesday - OPEN:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.updatedBusinessHoursChange(event, 'tuesday', 'open')}
						value={countersStore.updatedBusinessHours.tuesday.open}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.updatedBusinessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Tuesday - CLOSE:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.updatedBusinessHoursChange(event, 'tuesday', 'close')}
						value={countersStore.updatedBusinessHours.tuesday.close}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>

				<Item inlineLabel last rounded
					error={countersStore.updatedBusinessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Wednesday - OPEN:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.updatedBusinessHoursChange(event, 'wednesday', 'open')}
						value={countersStore.updatedBusinessHours.wednesday.open}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.updatedBusinessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Wednesday - CLOSE:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.updatedBusinessHoursChange(event, 'wednesday', 'close')}
						value={countersStore.updatedBusinessHours.wednesday.close}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>

				<Item inlineLabel last rounded
					error={countersStore.updatedBusinessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Thursday - OPEN:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.updatedBusinessHoursChange(event, 'thursday', 'open')}
						value={countersStore.updatedBusinessHours.thursday.open}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.updatedBusinessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Thursday - CLOSE:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.updatedBusinessHoursChange(event, 'thursday', 'close')}
						value={countersStore.updatedBusinessHours.thursday.close}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>

				<Item inlineLabel last rounded
					error={countersStore.updatedBusinessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Friday - OPEN:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.updatedBusinessHoursChange(event, 'friday', 'open')}
						value={countersStore.updatedBusinessHours.friday.open}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.updatedBusinessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Friday - CLOSE:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.updatedBusinessHoursChange(event, 'friday', 'close')}
						value={countersStore.updatedBusinessHours.friday.close}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.updatedBusinessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Saturday - OPEN:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.updatedBusinessHoursChange(event, 'saturday', 'open')}
						value={countersStore.updatedBusinessHours.saturday.open}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.updatedBusinessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Saturday - CLOSE:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.updatedBusinessHoursChange(event, 'saturday', 'close')}
						value={countersStore.updatedBusinessHours.saturday.close}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.updatedBusinessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Sunday - OPEN:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.updatedBusinessHoursChange(event, 'sunday', 'open')}
						value={countersStore.updatedBusinessHours.sunday.open}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>
				<Item inlineLabel last rounded
					error={countersStore.updatedBusinessHoursValid}
					style={styles.textWrapper}
					>
					<Label>Sunday - CLOSE:</Label>
					<Input
						style={styles.textField}
						onChangeText={event => countersStore.updatedBusinessHoursChange(event, 'sunday', 'close')}
						value={countersStore.updatedBusinessHours.sunday.close}
						// onBlur={countersStore.submitForm}
					/>
					<Button style={styles.inlineIconForField} onPress={this.toggleHelp}>
						<Icon style={styles.helpIcon} size={40} name='help' />
					</Button>
				</Item>

			</Form>
		);

    //------------------//
    //---------------//
    //------------------------END UPDATE/EDIT STORE FORM---------------//
    //------------------//
    //---------------//

    const storeDetails = (
    <View>
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
    </View>
    );

    // IF FORM IS LOADING STILL
    //------------------//
    //---------------//


    if (!this.state.isReady) {
      return (
        <View style={styles.centerMe}>
          <ActivityIndicator size="large" color="#435ccc"/>
        </View>
      );
    }

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

          {/* <ListItem onPress={() => this.setState({ itemSelected: "itemOne" }, function(){
            console.log(this.state.itemSelected);
          })}> */}
          <ListItem onPress={() => this.selectStoreType('itemOne')}>
             <Left>
               <Text style={styles.radio} >Approved/Accepted Store</Text>
             </Left>
             <Right>
               <Radio
                      selected={this.state.itemSelected == 'itemOne'}
                      color={"#f0ad4e"}
                      selectedColor={"#5cb85c"}/>
             </Right>
           </ListItem>
          <ListItem onPress={() => this.selectStoreType('itemTwo')}>
             <Left>
               <Text style={styles.radio}>Pending Stores</Text>
             </Left>
             <Right>
               <Radio
                      selected={this.state.itemSelected == 'itemTwo'}
                      color={"#f0ad4e"}
                      selectedColor={"#5cb85c"}/>
             </Right>
           </ListItem>

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
                  <Text style={{ fontWeight: "700", color: "#2CABFB"}}>Edit this store</Text>
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

          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.editStoreModalVisible}
            >
            <Content style={{ marginTop: 20, padding: 17, paddingBottom: 40, backgroundColor: '#102D64' }}>
              <Card style={{ marginBottom: 10 }}>
                <CardItem header>
                  <H1>Edit { this.state.selectedStore.name ? this.state.selectedStore.name : "Store Name"}</H1>
                </CardItem>
                <CardItem>
                  <Body>
                    {/* {storeDetails} */}

                    {EditForm}

                  </Body>
                </CardItem>
                <CardItem footer button onPress={() => {
                 this.setState({
                   editStoreModalVisible: !this.state.editStoreModalVisible
                 });
               }}>
                  <Text style={{ fontWeight: "700", color: "#2CABFB"}}>Close This Dialog</Text>
                </CardItem>
              </Card>
              <Button full block
                 style={styles.cardBtn}
                 onPress={() => this.saveStoreUpdates(this.state.selectedStore)}>
                <Text>Save</Text>
              </Button>
            </Content>
          </Modal>

      </Container>
    );
  }
}

export default PendingStores;
