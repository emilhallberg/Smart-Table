import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  free: { width: 20, height: 20, borderRadius: 10, backgroundColor: 'green' },
  occupied: { width: 20, height: 20, borderRadius: 10, backgroundColor: 'red' }
});

const Indicator = ({data}) => {

  const res = data.reduce((s,e) => s + parseInt(e.dd.body, 10), 0);

  if (res > 0) {
    return <View style={styles.occupied} />
  }
    return <View style={styles.free} />
};

export default Indicator;