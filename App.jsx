import React from 'react';
import { StyleSheet, View } from 'react-native';
import Sensor from "./components/Sensor";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
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
    <View style={styles.container}>
      {sensors.map(e => (
        <Sensor key={e.id} id={e.id} name={e.name} />
      ))}
    </View>
  );
};

export default App;


