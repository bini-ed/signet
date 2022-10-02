import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Logo from '../assets/SignetTagsLogo.png';
import Woman from '../assets/woman.png';

import AppText from '../components/AppText';
import Header from '../components/Header';
import colors from '../utils/colors';

const PeopleScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Header>
        <View></View>
        <Image source={Logo}></Image>
        <View></View>
      </Header>
      <TextInput
        style={styles.textInput}
        placeholder="Search People"></TextInput>
      <View style={styles.assetContainer}>
        <AppText style={styles.text}>ASSET OWNER</AppText>
        <TouchableOpacity
          onPress={() => navigate('PeopleDetail', {name: 'bugulu'})}>
          <Image source={Woman}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PeopleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    paddingHorizontal: 20,
  },
  textInput: {
    height: 59,
    backgroundColor: colors.box,
    borderRadius: 7,
  },
  assetContainer: {
    marginVertical: 10,
  },
  text: {
    color: '#908F95',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
});
