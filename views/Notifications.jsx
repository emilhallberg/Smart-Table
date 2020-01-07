import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const { create } = StyleSheet;

const styles = create({
  container: {
    flex: 1
  }
});

const Notifications = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>Mina notiser</Text>
    </View>
  );
};

export default Notifications;
