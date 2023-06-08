import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import Router from './src/navigation/Router';

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer theme={MyTheme}>
        <Router />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
