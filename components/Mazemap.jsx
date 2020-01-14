import React from 'react';
import { WebView } from 'react-native-webview';
import Maze from './custom.html';

const Mazemap = () => {
  return <WebView source={Maze} />;
};

export default Mazemap;
