import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Notify from '../components/Notify';
import Colors from '../utils/Colors';
import Mazemap from '../components/Mazemap';
import BottomBar from '../components/BottomBar';
const { create } = StyleSheet;

const styles = create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background
  }
});

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <Mazemap navigation={navigation} />
      <BottomBar navigation={navigation} />
      <Notify navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
