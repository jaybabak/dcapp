import { observable, action, computed, autorun } from "mobx";

class CountersStore {
  @observable count = 0;

  @action
  increase() {
    this.count + 1;
    console.log("incremented" + this.getTotal());
  }
  @action
  decrease() {
    this.count - 1;
    console.log("decrement" + this.getTotal());
  }
  @action
  getTotal() {
    return this.count;
  }
  autorun(){
    console.log(this.count);
  }
}

// var cntStore = window.store = new CountersStore

export default CountersStore;
