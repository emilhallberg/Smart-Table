import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Notify from '../components/Notify';
import Colors from '../utils/Colors';
import Mazemap from '../components/Mazemap';
const { create } = StyleSheet;

const styles = create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background
  },
  container: {
    flex: 1,
    marginTop: 30,
    flexDirection: 'column'
  }
});

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <Mazemap />
      <Notify navigation={navigation} />
    </SafeAreaView>
  );
};

/*
<FlatList
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        data={sensors}
        renderItem={({ item }) => (
          <Sensor key={item.id} id={item.id} name={item.name} refetch={refetch} navigation={navigation} />
        )}
      />
      <Button title="Välj byggnad" onPress={() => navigation.navigate('Buildings')} />
*/

export default Home;
