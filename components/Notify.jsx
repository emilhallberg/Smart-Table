import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Bell } from '../assets/Assets';
import Colors from '../utils/Colors';

const styles = StyleSheet.create({ container: { height: 50, width: 50, position: 'absolute', bottom: 10, right: 10 } });

const Notify = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Notifications')}>
      <Bell fill={Colors.primary} />
    </TouchableOpacity>
  );
};

export default Notify;
