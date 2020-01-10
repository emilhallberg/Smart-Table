import React from 'react';
import { WebView } from 'react-native-webview';
import Maze from './custom.html';

// {uri: 'http://use.mazemap.com/?campusid=289&sharepoitype=identifier&sharepoi=Teknikhuset-3.39.03'}
// {html: '<a href="exp://130.239.217.91:19000/--/Buildings">Buildings</a><a href="exp://130.239.217.91:19000/--/Table?id=a81758fffe03BD19&name=L54304">Table</a>'}
const Mazemap = () => {
  return <WebView source={Maze} />;
};

export default Mazemap;
