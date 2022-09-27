import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Header from '../components/Header';
import AppText from '../components/AppText';

import Back from '../assets/back.png';
import colors from '../utils/colors';
import AppButton from '../components/AppButton';

const {width, height} = Dimensions.get('screen');

const AddPost = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'space-between',
      }}>
      <View
        style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Back}></Image>
          </TouchableOpacity>
          <AppText style={styles.title}>ADD POST</AppText>
          <View></View>
        </Header>

        <View style={styles.addPost}>
          <AppButton
            title="SELECT PHOTOS OR VIDEOS"
            text={styles.selectText}
            style={styles.appButtonSelect}></AppButton>
        </View>
        <View style={styles.caption}>
          <AppText style={styles.text}>CAPTION</AppText>
          <TextInput style={styles.input}></TextInput>
        </View>
      </View>
      <View style={styles.button}>
        <AppButton
          title="POST NOW"
          text={styles.postTxt}
          style={styles.appButtonPost}></AppButton>
      </View>
    </ScrollView>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 30,
  },
  addPost: {
    height: height / 3,
    backgroundColor: colors.box,
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  caption: {
    width: '90%',
    marginTop: 10,
  },
  input: {
    backgroundColor: colors.box,
    borderRadius: 7,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#908F95',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  appButtonSelect: {
    marginVertical: 21,
    borderColor: '#D7A241',
    borderWidth: 2,
    borderRadius: 7,
    height: 33,
    justifyContent: 'center',
    width: '60%',
  },
  selectText: {
    color: '#D7A241',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    textAlign: 'center',
  },
  appButtonPost: {
    backgroundColor: '#D7A241',
    borderColor: '#FBCE71',
    borderWidth: 1,
    borderRadius: 7,
    height: 51,
    justifyContent: 'center',
    width: '90%',
  },
  postTxt: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 24,
  },

  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});
