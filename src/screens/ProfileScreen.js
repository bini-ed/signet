import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import Profile from '../assets/profile.png';
import Post from '../assets/post.png';
import Logo from '../assets/SignetTagsLogo.png';

import colors from '../utils/colors';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Header from '../components/Header';
import {getPostService} from '../services/postService';

const {width} = Dimensions.get('screen');
const ProfileScreen = () => {
  const navigation = useNavigation();
  const [hide, setHide] = useState(false);
  const [list, setList] = useState(false);

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPost();
    return () => {};
  }, []);

  const getPost = async () => {
    try {
      setLoading(true);
      const {data} = await getPostService();
      if (data) {
        const myPost = data.data.filter(
          post => post.postedBy._id == '63352dda6a0c5c489dd53dbc',
        );
        myPost ? setPost(myPost) : null;
      }
      setLoading(false);
    } catch (error) {
      if (error.response) {
        console.log('error response', error.response.data.msg);
      } else {
        console.log('Error Message', error.message);
      }
      setLoading(false);
    }
  };

  const toggleSwitchHide = () => setHide(previousState => !previousState);
  const toggleSwitchList = () => setList(previousState => !previousState);

  return (
    <ScrollView style={styles.container}>
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
      {loading ? (
        <ActivityIndicator
          animating={loading}
          color={colors.button}
          size={30}></ActivityIndicator>
      ) : (
        <View style={styles.postContainer}>
          {post.length ? (
            post.map((item, index) => (
              <View key={index} style={styles.post}>
                <Image source={Post} style={{width: width / 2 - 30}}></Image>
              </View>
            ))
          ) : (
            <AppText style={styles.postText}>No Post</AppText>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    paddingHorizontal: 20,
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
  post: {
    backgroundColor: colors.box,
    marginVertical: 20,
    width: width / 2 - 30,
    height: 106,
    borderRadius: 7,
    justifyContent: 'center',
  },
  postContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  postText: {
    color: 'white',
    textAlign: 'center',
    width: '100%',
    marginVertical: 10,
  },
});
