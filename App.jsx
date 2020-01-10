import React, { useRef, useState, useEffect } from 'react';
import { NavigationNativeContainer, useLinking } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Linking } from 'expo';
import Home from './views/Home';
import Buildings from './views/Buildings';
import Table from './views/Table';
import Notifications from './views/Notifications';
import Colors from './utils/Colors';

const Stack = createStackNavigator();

const navigationOptions = {
  title: '',
  headerBackTitle: 'Tillbaka',
  headerTintColor: Colors.primary,
  headerStyle: { backgroundColor: Colors.background }
};

const homeNavigationOptions = {
  title: 'Smart Table',
  headerBackTitle: 'Tillbaka',
  headerTintColor: Colors.primary,
  headerStyle: { backgroundColor: Colors.background }
}

const prefix = Linking.makeUrl('/');

const App = () => {
  const ref = useRef(null);

  const { getInitialState } = useLinking(ref, {
    prefixes: [prefix],
    config: {
      Home: {
        path: 'home'
      },
      Buildings: {
        path: 'buildings'
      },
      Notifications: {
        path: 'notifications'
      },
      Table: {
        path: 'table?id=:id?name=:name'
      }
    }
  });

  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = useState(null);

  useEffect(() => {
    (async () => {
      let state = null;
      try {
        state = await getInitialState();
      } catch (e) {}
      if (state) setInitialState(state);
      setIsReady(true);
    })();
  }, [getInitialState]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationNativeContainer initialState={initialState} ref={ref}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={homeNavigationOptions} />
        <Stack.Screen name="Table" component={Table} options={navigationOptions} />
        <Stack.Screen name="Buildings" component={Buildings} options={navigationOptions} />
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
