import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch, TouchableOpacity } from 'react-native';
import Circle from '../components/Circle';
const { create } = StyleSheet;
import Colors from '../utils/Colors';
import { isOccupied } from '../utils/Library';
import Notify from '../components/Notify';

const styles = create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
    position: 'relative'
  },
  circle: {
    height: 300,
    width: 300,
    position: 'relative'
  },
  title: {
    paddingTop: 30,
    paddingBottom: 5,
    fontSize: 25
  },
  subTitle: {
    paddingTop: 5,
    paddingBottom: 50,
    fontSize: 15
  },
  label: {
    paddingTop: 30,
    fontSize: 20
  },
  switch: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    marginTop: 20,
    backgroundColor: Colors.primary,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10
  }
});

const Table = ({ route, navigation }) => {
  const [notify, setNotify] = useState(false);
  const { id, data, name } = route.params;
  const time = data.map(item => {
    return item.time;
  });
  const temperature = data.map(item => {
    return item.dd.temperature;
  });
  const humidity = data.map(item => {
    return item.dd.humidity;
  });

  const occupied = isOccupied(data);

  const circleData = {
    left: { label: 'Fuktighet', value: humidity, color: Colors.normal },
    right: { label: 'Temperatur', value: temperature, color: Colors.primary },
    bottom: {
      label: `${occupied ? 'Upptaget' : 'Ledigt'}`,
      value: null,
      color: occupied ? Colors.negative : Colors.positive
    }
  };

  const setupNotification = () => {
    setNotify(v => !v);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subTitle}>{time}</Text>
      <View style={styles.circle}>
        <Circle data={circleData} />
      </View>
      <Text style={styles.label}>{`Bordet är för tillfället ${occupied ? 'upptaget' : 'ledigt'}!`}</Text>
      <View style={styles.switch}>
        <Text style={{ marginEnd: 10, fontSize: 12 }}>Skicka notis om bordet blir upptaget:</Text>
        <Switch
          value={notify}
          onChange={setupNotification}
          thumbColor={Colors.primary}
          trackColor={{ false: Colors.normal, true: Colors.primary }}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => alert('Inte implementerad ännu.')}>
        <Text style={{ color: Colors.circleText }}>Visa vägbeskrivning</Text>
      </TouchableOpacity>
      <Notify navigation={navigation} />
    </View>
  );
};

export default Table;
