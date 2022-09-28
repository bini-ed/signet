import {Image, StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../utils/colors';
import AppButton from '../components/AppButton';
import Profile from '../assets/profile.png';
import Logo from '../assets/SignetTagsLogo.png';
import Header from '../components/Header';
import AppText from '../components/AppText';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [hide, setHide] = useState(false);
  const [list, setList] = useState(false);

  const toggleSwitchHide = () => setHide(previousState => !previousState);
  const toggleSwitchList = () => setList(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Header>
        <View></View>
        <Image source={Logo}></Image>
        <View></View>
      </Header>

      <View style={styles.profileContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={Profile}></Image>
          <AppText style={styles.text}>Manish Gautam</AppText>
        </View>
        <AppButton
          title="EDIT PROFILE"
          onPress={() => navigation.navigate('EditProfile')}
          text={styles.detailTxt}
          style={styles.appButtonDetail}></AppButton>
      </View>

      <View style={styles.switch}>
        <AppText>Hide Me on Community</AppText>
        <Switch
          trackColor={{false: 'grey', true: colors.button}}
          thumbColor={hide ? colors.button : 'grey'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchHide}
          value={hide}
        />
      </View>
      <View style={styles.switch}>
        <AppText>List t-shirt for Sale</AppText>
        <Switch
          trackColor={{false: 'grey', true: colors.button}}
          thumbColor={list ? colors.button : 'grey'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchList}
          value={list}
        />
      </View>

      <AppText style={styles.txt}>YOUR POSTS</AppText>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    paddingHorizontal: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.white,
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  txt: {
    color: '#908F95',
    marginVertical: 10,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  switch: {
    backgroundColor: colors.box,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 59,
    borderRadius: 7,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  appButtonDetail: {
    marginVertical: 21,
    borderColor: '#D7A241',
    borderWidth: 2,
    borderRadius: 7,
    height: 33,
    justifyContent: 'center',
    width: 106,
  },
  detailTxt: {
    color: '#D7A241',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
  },
});
