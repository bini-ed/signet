import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfile from '../screens/EditProfile';

const ProfileNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
