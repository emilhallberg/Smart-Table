import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
const { create } = StyleSheet;

const styles = create({
  container: {
    flex: 1
  }
});

const Table = ({ route }) => {
  const { id, data, name } = route.params;
  const time = data.map((item)=>{return item.time})
  const temperature = data.map((item)=>{return item.dd.temperature})
  const humidity = data.map((item)=>{return item.dd.humidity})

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>Id of sensor:</Text>
      <Text>{id}</Text>
      <Text>Last time fetched:</Text>
      <Text>{time}</Text>
      <Text>Temperature:</Text>
      <Text>{temperature}</Text>
      <Text>Humidity:</Text>
      <Text>{humidity}</Text>   
      

      
      
    </View>
  );
};

export default Table;
