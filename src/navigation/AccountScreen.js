import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AccountNavigation from './AccountNavigation';

const AccountScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Account" component={AccountNavigation} />
    </Stack.Navigator>
  );
};
export default AccountScreen;
