import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CommunityScreen from '../screens/CommunityScreen';
import AddPost from '../screens/AddPost';

const CommunityNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="community"
        component={CommunityScreen}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="AddPost"
        component={AddPost}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default CommunityNavigation;
