import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const userData = useSelector(state => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!!userData?.userData?._id ? (
          <>{MainStack(Stack)}</>
        ) : (
          <>{AuthStack(Stack)}</>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
