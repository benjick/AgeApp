import { observable, computed } from 'mobx';
import { AsyncStorage } from 'react-native';
import { create, persist } from 'mobx-persist';
import moment from 'moment';

class Store {
  @persist @observable date = '1989-06-01';

  setDate(date) {
    this.date = date;
  }

  @computed get age() {
    const birthday = moment(this.date);
    return moment().diff(birthday, 'years');
  }
}

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});

const store = new Store();

hydrate('@ageApp', store);

export default store;
