import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const { create } = StyleSheet;

const styles = create({
  container: {
    flex: 1
  }
});

const Table = ({ route }) => {
  const { id, data } = route.params;

  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default Table;
