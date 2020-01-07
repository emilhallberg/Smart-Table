import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { LeftCircle, RightCircle, BottomCircle } from '../assets/Assets';
import Table from '../assets/table-small.png';
import Colors from '../utils/Colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  table: { width: 95, height: 95 },
  left: { position: 'absolute', left: 0, top: 0 },
  leftLabel: { position: 'absolute', left: 10, top: 110, fontSize: 12, color: Colors.circleText },
  leftValue: {
    position: 'absolute',
    left: 22,
    top: 80,
    fontSize: 25,
    color: Colors.circleText
  },
  right: { position: 'absolute', right: 0, top: 0 },
  rightLabel: { position: 'absolute', right: 8, top: 110, fontSize: 12, color: Colors.circleText },
  rightValue: {
    position: 'absolute',
    right: 18,
    top: 80,
    fontSize: 25,
    color: Colors.circleText
  },
  bottom: { position: 'absolute', bottom: 0, alignItems: 'center' },
  bottomLabel: { position: 'absolute', bottom: 30, fontSize: 25, color: Colors.circleText }
});

const Circle = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <LeftCircle fill={data.left.color} />
        <Text style={styles.leftLabel}>{data.left.label}</Text>
        <Text style={styles.leftValue}>{`${data.left.value} %`}</Text>
      </View>
      <View style={styles.right}>
        <RightCircle fill={data.right.color} />
        <Text style={styles.rightLabel}>{data.right.label}</Text>
        <Text style={styles.rightValue}>{`${parseFloat(data.right.value).toFixed(0)} ℃`}</Text>
      </View>
      <View style={styles.bottom}>
        <BottomCircle fill={data.bottom.color} />
        <Text style={styles.bottomLabel}>{data.bottom.label}</Text>
      </View>
      <Image source={Table} style={styles.table} />
    </View>
  );
};

export default Circle;
