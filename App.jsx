import React from 'react';
import Home from "./views/Home";
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Table from "./components/Table";


const Navigator = createStackNavigator(
  {
    Home: {screen: Home},
    Table: {screen: Table}
  },
  {
    initialRouteName: 'Home'
  }
);

const App = createAppContainer(Navigator);

export default App;


