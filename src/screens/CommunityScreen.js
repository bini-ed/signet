import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import Video from 'react-native-video';

import Logo from '../assets/SignetTagsLogo.png';
import Add from '../assets/add.png';
import Profile from '../assets/profile.png';
import Like from '../assets/like.png';
import Comment from '../assets/Comments.png';
import Kass from '../assets/Video/kass.mp4';

import AppText from '../components/AppText';
import Header from '../components/Header';
import colors from '../utils/colors';

import {getCommentsService} from '../services/commentService';
import {addLikeService, getLikeService} from '../services/likeService';
import {getLike} from '../services/likeService/getLikeService';
import {getPostService} from '../services/postService';
import AppVideo from '../components/AppVideo';
import VideoPlayer from 'react-native-video-player';

const CommunityScreen = () => {
  const {navigate} = useNavigation();
  const data = [
    {id: 1, name: 'Manshi Guatm', last: 1},
    {id: 2, name: 'Manshi Guatm', last: 2},
    {id: 3, name: 'Manshi Guatm', last: 2},
    {id: 4, name: 'Manshi Guatm', last: 2},
  ];

  const [loading, setLoading] = useState(false);
  const [datas, setData] = useState([]);
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState();

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    setLoading(true);
    try {
      const {data} = await getPostService();
      if (data?.data) {
        // console.log(JSON.stringify(data.data, null, 2));
        const newData = [];
        try {
          await Promise.all(
            data.data.map(async item => {
              const response = await getLikeService(item._id);
              const comment = await getCommentsService(item._id);
              item.like = response.data.data;
              item.comment = comment.data;
              // console.log('data', JSON.stringify(response.data.data, null, 2));
              newData.push(item);
            }),
          );

          setData(newData);
        } catch (error) {
          if (error.response) {
            console.log('error response', error.response.data.msg);
          } else {
            console.log('Error Message', error.message);
          }
        }
      } else {
      }
    } catch (error) {
      if (error.response) {
        console.log('error response', error.response.data.msg);
      } else {
        console.log('Error Message', error.message);
      }
    }
    setLoading(false);
  };
  // console.log('data', JSON.stringify(datas, null, 2));

  const callLikeApi = async id => {
    setLoading(true);
    try {
      const {data} = await addLikeService(id);
      if (data) {
        console.log('dada', data);
        return getPost();
      }
    } catch (error) {
      error.response
        ? console.log(error.response.data)
        : console.log(error.message);
      setLoading(false);
    }
  };

  const handleLike = async id => {
    const post = datas.filter(item => item._id == id);
    const found = post[0].like.find(likes => {
      likes.likedBy[0]._id == '63352ddaf6989d2nue5qkrut';
    });
    if (found?._id != undefined) console.log('You have already liked');
    else {
      callLikeApi(id);
    }
  };
  const onViewableItemsChanged = ({viewableItems, changed}) => {
    setCurrentVisibleIndex(viewableItems[0].index);
  };

  const viewabilityConfigCallbackPairs = useRef([{onViewableItemsChanged}]);
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

      <View style={styles.boxContainer}>
        {loading && (
          <ActivityIndicator
            animating={loading}
            size={30}
            color={colors.button}></ActivityIndicator>
        )}

        <FlatList
          data={datas}
          showsVerticalScrollIndicator={false}
          initialNumToRender={5}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          renderItem={({item, index}) => (
            <View style={styles.postContainer}>
              {/* {console.log(
                'dddd',
                JSON.stringify(item.assetURL.split('.', -1), null, 2),
              )} */}

              <View style={styles.name}>
                <View style={styles.profile}>
                  <Image style={{marginRight: 5}} source={Profile}></Image>
                  <AppText style={[styles.text, {color: 'white'}]}>
                    {item.postedBy?.fullName}
                  </AppText>
                </View>
                <AppText style={styles.text}>
                  {/* {moment(item.postedDate).format('DD')} DAY AGO */}
                </AppText>
              </View>
              {item.assetURL.endsWith('mp4') ? (
                <AppVideo
                  currentIndex={index}
                  currentVisibleIndex={currentVisibleIndex}
                  video={{uri: item.assetURL}}></AppVideo>
              ) : (
                <Image
                  source={{uri: item.assetURL}}
                  style={{
                    width: '100%',
                    height: 400,
                  }}></Image>
              )}

              <View style={styles.status}>
                <View>
                  {item.like.length ? (
                    <TouchableOpacity onPress={() => handleLike(item._id)}>
                      <Image source={Like}></Image>
                      <AppText style={styles.text}>{item.like.length}</AppText>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => handleLike(item._id)}>
                      <Image source={Like}></Image>
                      <AppText style={styles.text}>No Likes</AppText>
                    </TouchableOpacity>
                  )}
                </View>
                <View style={styles.comment}>
                  {item.comment.data.length ? (
                    <>
                      <Image source={Comment}></Image>
                      <AppText style={styles.text}>
                        {item.comment.data.length}
                      </AppText>
                    </>
                  ) : (
                    <>
                      <Image source={Comment}></Image>
                      <AppText style={styles.text}>No comment</AppText>
                    </>
                  )}
                </View>
              </View>
            </View>
          )}></FlatList>
      </View>
    </View>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
    alignItems: 'center',
    paddingBottom: 80,
  },
  add: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 5,
  },
  text: {
    color: '#908F95',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  boxContainer: {
    paddingHorizontal: 20,
    width: '100%',
  },
  postContainer: {
    backgroundColor: '#1B1A1E',
    paddingVertical: 10,
    marginVertical: 15,
    borderRadius: 7,
    // height: 350,
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
    marginTop: 20,
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
