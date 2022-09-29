import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PeopleScreen from '../screens/PeopleScreen';
import PeopleDetailScreen from '../screens/PeopleDetailScreen';

const Stack = createStackNavigator();

const PeopleNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{presentation: 'modal'}}>
      <Stack.Screen
        name="People"
        component={PeopleScreen}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="PeopleDetail"
        component={PeopleDetailScreen}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default PeopleNavigation;
