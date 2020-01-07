import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import Buildings from './views/Buildings';
import Table from './views/Table';
import Notifications from './views/Notifications';
import Colors from './utils/Colors';

const Stack = createStackNavigator();

const navopt = {
  title: '',
  headerBackTitle: 'Tillbaka',
  headerTintColor: Colors.primary,
  headerStyle: { backgroundColor: Colors.background }
};

const App = () => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={navopt} />
        <Stack.Screen name="Table" component={Table} options={navopt} />
        <Stack.Screen name="Buildings" component={Buildings} options={navopt} />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ title: '', headerBackTitle: 'Tillbaka' }}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
};

export default App;
