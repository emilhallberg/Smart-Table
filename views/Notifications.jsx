import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Bell } from '../assets/Assets';
import Colors from '../utils/Colors';

const { create } = StyleSheet;

const styles = create({
  container: {
    flex: 1,
  },
  headline: {
    justifyContent: "center",
    alignItems:"center",
    flexDirection:"row",
    paddingTop: 30,
    
  }
});

const Notifications = ({ route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headline}>
        <Text style={{fontSize: 25, paddingEnd:10}}>Mina notiser</Text>
        <Bell fill={Colors.primary}/>
      </View>
    </View>
  );
};

export default Notifications;
