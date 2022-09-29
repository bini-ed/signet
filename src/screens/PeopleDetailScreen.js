import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';

import Back from '../assets/back.png';
import Profile from '../assets/woman.png';
import Post from '../assets/post.png';
import colors from '../utils/colors';
import Header from '../components/Header';
import AppText from '../components/AppText';

import {useNavigation, useRoute} from '@react-navigation/native';

const {width} = Dimensions.get('screen');
const PeopleDetailScreen = () => {
  const navigate = useNavigation();
  const route = useRoute();
  const title = route.name;

  const length = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <Header>
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <Image source={Back}></Image>
        </TouchableOpacity>
        <AppText style={styles.title}>{title}</AppText>
        <View></View>
      </Header>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Image source={Profile} style={{alignSelf: 'center'}}></Image>
        <AppText style={styles.text}>ABOUT</AppText>
        <AppText style={[styles.text, {color: 'white'}]}>
          The photographs describes the fight of young souls seeking escape from
          old rituals in order to build their own story and future.
        </AppText>

        <View style={styles.box}>
          <View style={styles.infoLabel}>
            <AppText style={styles.infoTxt}>EMAIl</AppText>
            <AppText style={styles.txt}>Someone@gmail.com</AppText>
          </View>

          <View style={styles.infoLabel}>
            <AppText style={styles.infoTxt}>ADDRESS</AppText>
            <AppText style={styles.txt}>ABC Colony</AppText>
          </View>

          <View style={styles.infoLabel}>
            <AppText style={styles.infoTxt}>PURCHASED ON</AppText>
            <AppText style={styles.txt}>02 Apr 2022</AppText>
          </View>

          <View style={styles.infoLabel}>
            <AppText style={styles.infoTxt}>LAST ACTIVE</AppText>
            <AppText style={styles.txt}>01 Apr 2022</AppText>
          </View>
        </View>

        <AppText style={styles.text}>POSTS</AppText>
        <View style={styles.postContainer}>
          {length.map((item, index) => (
            <View key={index} style={styles.post}>
              <Image source={Post} style={{width: width / 2 - 30}}></Image>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default PeopleDetailScreen;

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
  text: {
    color: '#908F95',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'left',
    width: '100%',
  },
  box: {
    width: '100%',
    backgroundColor: colors.box,
    borderRadius: 7,
    paddingVertical: 10,
    marginVertical: 20,
  },
  infoTxt: {
    fontSize: 16,
    fontWeight: '400',
    color: '#908F95',
    textAlign: 'right',
    flex: 0.4,
  },
  infoLabel: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  txt: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
    color: colors.white,
    flex: 0.6,
  },
  post: {
    width: width / 2 - 30,
    borderRadius: 7,
    margin: 10,
  },
  postContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
