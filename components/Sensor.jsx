import React from 'react';
import PropTypes from 'prop-types';
import { Text} from 'react-native';
import { useFetchJSON } from '../utils/Fetch';
import { formatDate } from '../utils/Library';

const Sensor = ({ id, name }) => {
  const apiKey = '139kTnm10ksR';
  const rows = 1;
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const { loading, error, data } = useFetchJSON(
    `/${id}/${formatDate(today)}/${formatDate(tomorrow)}/${rows}/${apiKey}`
  );

  if (error) {
    return <Text>{error}</Text>;
  }

  if (loading) {
    return <Text>Laddar...</Text>;
  }

  return (
    <Text>
      {`${name} => `}
      {`${id} => `}
      {data.map(e => `${JSON.stringify(e.dd)},`)}
    </Text>
  );
};

Sensor.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Sensor;