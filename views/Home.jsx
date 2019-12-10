import React, {useState, useCallback} from 'react';
import {StyleSheet, RefreshControl, ScrollView, FlatList, SafeAreaView} from 'react-native';
import Sensor from "../components/Sensor";
import { wait } from "../utils/Library";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  container: {
    flex: 1,
    marginTop: 30,
    flexDirection: "column",
    backgroundColor: "red"
  }
});

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [refetch, setRefetch] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setRefetch(v => !v);
    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  const sensors = [
    { name: 'L54304', id: 'a81758fffe03BD19' },
    { name: 'L54204', id: 'a81758fffe03BD12' },
    { name: 'L54004', id: 'a81758fffe03BD14' },
    { name: 'L53804', id: 'a81758fffe03BD15' },
    { name: 'L53504', id: 'a81758fffe03BD1D' },
    { name: 'L53104', id: 'a81758fffe03BD20' },
    { name: 'L54515', id: 'a81758fffe03BD10' },
    { name: 'L54315', id: 'a81758fffe03BD17' },
    { name: 'L54215', id: 'a81758fffe03BD1B' },
    { name: 'L54015', id: 'a81758fffe03BD1C' },
    { name: 'L53815', id: 'a81758fffe03BD11' },
    { name: 'L53015', id: 'a81758fffe038751' },
    { name: 'C53503', id: 'a81758fffe03BD1A' },
    { name: 'C53703', id: 'a81758fffe03BD1F' },
    { name: 'C53903', id: 'a81758fffe03BD13' },
    { name: 'C53815', id: 'a81758fffe03BD1E' },
    { name: 'C53515', id: 'a81758fffe03BD16' },
    { name: 'C54115', id: 'a81758fffe03BD18' }
  ];


  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={
          sensors
        }
        renderItem={({item}) => <Sensor key={item.id} id={item.id} name={item.name} refetch={refetch}/>}
      />
    </SafeAreaView>
  );
};

export default Home;


