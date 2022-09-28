import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Color from '../utils/colors';
import Header from '../components/Header';
import Logo from '../assets/SignetTagsLogo.png';
import colors from '../utils/colors';

const People = () => {
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
    </View>
  );
};

export default People;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.appBackground,
    paddingHorizontal: 20,
  },
  textInput: {
    height: 59,
    backgroundColor: colors.box,
    borderRadius: 7,
  },
});
