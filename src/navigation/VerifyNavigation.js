import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import VerifyScreen from '../screens/VerifyScreen';
import DetailScreen from '../screens/DetailScreen';
import TransferScreen from '../screens/TransferScreen';

const Stack = createStackNavigator();
const VerifyNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Verify"
        options={{headerShown: false}}
        component={VerifyScreen}></Stack.Screen>
      <Stack.Screen
        name="Detail"
        options={{headerShown: false}}
        component={DetailScreen}></Stack.Screen>
      <Stack.Screen
        name="Transfer"
        options={{headerShown: false}}
        component={TransferScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default VerifyNavigation;
