import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import * as Screens from '../screens';
import {Image} from 'react-native';
import ImagePath from '../constants/ImagePath';
import NavigationString from '../constants/NavigationString';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigationString.CHATS}>
      <Tab.Screen
        name={NavigationString.STATUS}
        component={Screens.Status}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'blue' : 'black'}}
                source={ImagePath.icStatus}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationString.CALLS}
        component={Screens.Calls}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'blue' : 'black'}}
                source={ImagePath.icCalls}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationString.CAMERA}
        component={Screens.Camera}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'blue' : 'black'}}
                source={ImagePath.icCamera}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationString.CHATS}
        component={Screens.Chats}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'blue' : 'black'}}
                source={ImagePath.icChats}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationString.SETTINGS}
        component={Screens.Settings}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? 'blue' : 'black'}}
                source={ImagePath.icSettings}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
