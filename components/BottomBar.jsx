import React, { useState } from 'react';
import { View, Text, StyleSheet, Slider, Button } from 'react-native';
import Colors from '../utils/Colors';
const { create } = StyleSheet;

const styles = create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.background,
  },
  text: {
    fontSize: 20
  },
  centerContent: {
    alignItems: 'center'
  }
});

const BottomBar = ({ navigation }) => {
  const [barValue, setBarValue] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <View style={{ flexDirection: 'row', paddingTop: 18 }}>
          <Text>Bord för minst</Text>
          <Text style={{ fontWeight: 'bold' }}> {barValue} st</Text>
        </View>
        <Slider
          style={{ width: 300, height: 45, paddingTop: 10 }}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor={Colors.primary}
          maximumTrackTintColor={Colors.normal}
          thumbTintColor={Colors.primary}
          step={1}
          value={barValue}
          onValueChange={e => setBarValue(e)}
        />
        <Button title="Visa vägen till närmaste bord" onPress={() => alert('Inte implementerat ännu.')} />
        <Button title="Välj byggnad" onPress={() => navigation.navigate('Buildings')} />
      </View>
    </View>
  );
};

export default BottomBar;
