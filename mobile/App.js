import React from 'react';

import Routes from './src/routes';
import { StatusBar } from 'react-native';

function App() {
  return (
    <>
      <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
      <Routes />
    </>
  );
};

export default App;