import React from 'react';
import { StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import DatePicker from 'react-native-datepicker';

const SelectDate = ({ store }) => (
  <DatePicker
    style={{ width: 200 }}
    date={store.date}
    mode="date"
    placeholder="select date"
    format="YYYY-MM-DD"
    confirmBtnText="Confirm"
    cancelBtnText="Cancel"
    customStyles={styles}
    onDateChange={(date) => { store.setDate(date); }}
  />
);

const styles = StyleSheet.create({
  dateIcon: {
    position: 'absolute',
    left: 0,
    top: 4,
    marginLeft: 0,
  },
  dateInput: {
    borderWidth: 0,
  },
});

export default inject('store')(observer(SelectDate));
