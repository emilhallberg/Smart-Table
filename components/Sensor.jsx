import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, ActivityIndicator, View, Button} from 'react-native';
import { useFetchJSON } from '../utils/Fetch';
import { formatDate } from '../utils/Library';
import Indicator from "./Indicator";
import { NavigationActions } from 'react-navigation';
let {navigate} = NavigationActions;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  indicator: { width: 20, height: 20, borderRadius: 10, backgroundColor: 'red' }
});

const Sensor = ({ id, name, refetch}) => {

  const apiKey = '139kTnm10ksR';
  const rows = 1;
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const { loading, error, data } = useFetchJSON(
    `/${id}/${formatDate(today)}/${formatDate(tomorrow)}/${rows}/${apiKey}`, {}, refetch
  );

  if (error) {
    return <Text>{error}</Text>;
  }

  if (loading) {
    return <ActivityIndicator size="small" color="#000000" />;
  }

  return (
    <View style={styles.container}>
      <View>
      <Text style={{fontWeight: "bold"}}>{name}</Text>
      <Text>{id.toUpperCase()}</Text>
      </View>
      <Indicator data={data}/>
      <Button title="Test" onPress={() => navigate({
        routeName: 'Table',
        params: {},
        action: NavigationActions.navigate({ routeName: 'Table' }),
      })}/>
    </View>
  );
};

Sensor.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  refetch: PropTypes.bool.isRequired
};

export default Sensor;