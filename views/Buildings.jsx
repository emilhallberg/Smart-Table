import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const { create } = StyleSheet;

const styles = create({
  container: {
    flex: 1
  }
});

const Buildings = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>Välj byggnad</Text>
    </View>
  );
};

export default Buildings;
