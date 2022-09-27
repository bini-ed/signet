import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import Header from '../components/Header';
import Logo from '../assets/SignetTagsLogo.png';
import Add from '../assets/add.png';
import Sample from '../assets/sample.png';
import Profile from '../assets/profile.png';
import Like from '../assets/like.png';
import Comment from '../assets/Comments.png';
import AppText from '../components/AppText';
import colors from '../utils/colors';
import {useNavigation} from '@react-navigation/native';

const CommunityScreen = () => {
  const data = [
    {id: 1, name: 'Manshi Guatm', last: 1},
    {id: 2, name: 'Manshi Guatm', last: 2},
  ];
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Header>
        <View></View>
        <View></View>
        <Image source={Logo} style={styles.logo}></Image>
        <TouchableOpacity
          style={styles.add}
          onPress={() => navigate('AddPost')}>
          <Image source={Add}></Image>
          <AppText>ADD POST</AppText>
        </TouchableOpacity>
      </Header>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.postContainer}>
            <View style={styles.name}>
              <View style={styles.profile}>
                <Image style={{marginRight: 5}} source={Profile}></Image>
                <AppText style={[styles.text, {color: 'white'}]}>
                  {item.name}
                </AppText>
              </View>
              <AppText style={styles.text}>{item.last} DAY AGO</AppText>
            </View>
            <Image source={Sample}></Image>

            <View style={styles.status}>
              <View>
                <Image source={Like}></Image>
                <AppText style={styles.text}>15 Likes</AppText>
              </View>
              <View style={styles.comment}>
                <Image source={Comment}></Image>
                <AppText style={styles.text}>16 Comments </AppText>
              </View>
            </View>
          </View>
        )}></FlatList>
    </View>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    alignItems: 'center',
  },
  add: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: {
    color: '#908F95',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  postContainer: {
    backgroundColor: '#1B1A1E',
    paddingVertical: 10,
    marginVertical: 15,
    borderRadius: 7,
  },
  name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 21,
    marginVertical: 10,
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 21,
    marginVertical: 10,
  },
  comment: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
