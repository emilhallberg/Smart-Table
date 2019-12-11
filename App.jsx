import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import Table from './components/Table';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Smart Table' }} />
        <Stack.Screen name="Table" component={Table} options={({ route }) => ({ title: route.params.name })} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
};

export default App;
