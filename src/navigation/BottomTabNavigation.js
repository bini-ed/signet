import react from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LandingPage from '../screens/LandingPage';
import People from '../screens/PeopleScreen';

import colors from '../utils/colors';
import PeopleImg from '../assets/people.png';
import {Image, Text, View} from 'react-native';
import Verify from '../assets/verify.png';
import Community from '../assets/community.png';
import VerifyScreen from '../screens/VerifyScreen';
import VerifyNavigation from './VerifyNavigation';
import CommunityScreen from '../screens/CommunityScreen';
import CommunityNavigation from './CommunityNavigation';

const Bottom = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.button,
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: colors.bottomTab,
        tabBarInactiveBackgroundColor: colors.bottomTab,
        tabBarLabelStyle: {
          paddingBottom: 2.5,
          fontSize: 14,
        },
        tabBarStyle: [
          {
            display: 'flex',
            backgroundColor: 'black',
            height: 60,
          },
          null,
        ],
      }}>
      <Bottom.Screen
        name="VerifyPage"
        options={{
          title: 'Verify',
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Image style={{width: 25, height: 25}} source={Verify}></Image>
          ),
        }}
        component={VerifyNavigation}></Bottom.Screen>
      <Bottom.Screen
        name="CommunityNav"
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image style={{width: 25, height: 25}} source={Community}></Image>
          ),
        }}
        component={CommunityNavigation}></Bottom.Screen>
      <Bottom.Screen
        name="People"
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image style={{width: 25, height: 25}} source={PeopleImg}></Image>
          ),
        }}
        component={People}></Bottom.Screen>
      <Bottom.Screen
        name="Profile"
        options={{headerSHown: false}}
        component={LandingPage}></Bottom.Screen>
    </Bottom.Navigator>
  );
};
export default BottomTabNavigation;