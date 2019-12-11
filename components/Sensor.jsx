import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, ActivityIndicator, View, TouchableOpacity } from 'react-native';
import { useFetchJSON } from '../utils/Fetch';
import { formatDate } from '../utils/Library';
import Indicator from './Indicator';
const { create } = StyleSheet;

const styles = create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  indicator: { width: 20, height: 20, borderRadius: 10, backgroundColor: 'red' }
});

const Sensor = ({ id, name, refetch, navigation }) => {
  const apiKey = '139kTnm10ksR';
  const rows = 1;
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const { loading, error, data } = useFetchJSON(
    `/${id}/${formatDate(today)}/${formatDate(tomorrow)}/${rows}/${apiKey}`,
    {},
    refetch
  );

  if (error) {
    return <Text>{error}</Text>;
  }

  if (loading) {
    return <ActivityIndicator size="small" color="#000000" />;
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Table', { id, name, data })}>
      <View style={styles.container}>
        <View>
          <Text style={{ fontWeight: 'bold' }}>{name}</Text>
          <Text>{id.toUpperCase()}</Text>
        </View>
        <Indicator data={data} />
      </View>
    </TouchableOpacity>
  );
};

Sensor.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  refetch: PropTypes.bool.isRequired
};

export default Sensor;
