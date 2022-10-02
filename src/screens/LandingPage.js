import {View, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';

import Logo from '../assets/logo.png';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import LinearButton from '../components/LinearButton';

const {width} = Dimensions.get('window');

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={Logo} style={{width: 325, height: 325}}></Image>
      </View>
      <View style={styles.button}>
        <View style={styles.info}>
          <AppText style={styles.text}>Welcome to Signet Tags.</AppText>
          <AppText style={styles.text}>Scan a tag to get started</AppText>
        </View>

        <LinearButton text="SCAN A TAG"></LinearButton>
        <AppButton
          title="EXPLORE OUR STORE"
          style={styles.appButtonExplore}
          text={styles.exploreTxt}></AppButton>
      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  logo: {flex: 0.7, justifyContent: 'center'},
  button: {
    flex: 0.3,
    width: width - 23,
  },
  appButtonExplore: {
    marginVertical: 21,
    borderColor: '#D7A241',
    borderWidth: 2,
    borderRadius: 7,
    height: 51,
    justifyContent: 'center',
  },
  exploreTxt: {
    color: '#D7A241',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
    color: 'white',
  },
});
