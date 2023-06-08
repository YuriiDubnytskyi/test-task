import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AccountScreen from './AccountScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused}) => {
          if (route.name === 'HomeScreen') {
            return (
              <Ionicons
                name="home"
                size={30}
                color={focused ? 'green' : 'black'}
              />
            );
          }
          if (route.name === 'Messages') {
            return (
              <Ionicons
                name="md-chatbubble-ellipses-outline"
                size={30}
                color={focused ? 'green' : 'black'}
              />
            );
          }
          if (route.name === 'Add') {
            return (
              <Ionicons
                name="md-add-circle-outline"
                size={30}
                color={focused ? 'green' : 'black'}
              />
            );
          }
          if (route.name === 'StoreScreen') {
            return (
              <Ionicons
                name="md-layers-outline"
                size={30}
                color={focused ? 'green' : 'black'}
              />
            );
          }
          if (route.name === 'AccountScreen') {
            return (
              <Ionicons
                name="md-person-circle-outline"
                size={30}
                color={focused ? 'green' : 'black'}
              />
            );
          }
        },
        tabBarStyle: {backgroundColor: 'white', showIcon: true},
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen name="HomeScreen" component={AccountScreen} />
      <Tab.Screen name="Messages" component={AccountScreen} />
      <Tab.Screen name="Add" component={AccountScreen} />
      <Tab.Screen name="StoreScreen" component={AccountScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  );
};
export default BottomTab;
