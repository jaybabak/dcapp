import { observable, action, computed, autorun } from "mobx";

class CountersStore {
  @observable count = 0;

  @action
  increase() {
    this.count++;
    console.log("incremented" + this.count);
  }
  @action
  decrease() {
    this.count--;
    console.log("decrement" + this.count);
  }
  @computed get getTotal() {
    return this.count;
  }
  autorun = () => {
    console.log(this.getTotal);
  }
}

// var cntStore = window.store = new CountersStore

export default CountersStore;
