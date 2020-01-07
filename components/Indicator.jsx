import React from 'react';
import { StyleSheet, View } from 'react-native';
import { isOccupied } from '../utils/Library';

const styles = StyleSheet.create({
  free: { width: 20, height: 20, borderRadius: 10, backgroundColor: 'green' },
  occupied: { width: 20, height: 20, borderRadius: 10, backgroundColor: 'red' }
});

const Indicator = ({ data }) => {
  const res = isOccupied(data);

  if (res > 0) {
    return <View style={styles.occupied} />;
  }
  return <View style={styles.free} />;
};

export default Indicator;
