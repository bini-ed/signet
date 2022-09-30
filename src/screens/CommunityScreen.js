import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

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
import {getPostService} from '../services/postService';

const CommunityScreen = () => {
  const {navigate} = useNavigation();
  const data = [
    {id: 1, name: 'Manshi Guatm', last: 1},
    {id: 2, name: 'Manshi Guatm', last: 2},
  ];

  const [loading, setLoading] = useState(false);
  const [datas, setData] = useState([]);

  useEffect(() => {
    getPost();
    return () => {};
  }, []);

  const getPost = async () => {
    setLoading(true);
    try {
      const {data} = await getPostService();
      if (data) {
        setData(data.data);
        // console.log('data', JSON.stringify(data.data, null, 2));
      }
    } catch (error) {
      // console.log(
      //   error.reponse && error.reponse.data
      //     ? error.reponse.data
      //     : error.message,
      // );

      if (error.response) {
        console.log('error response', error.response.data.msg);
      } else {
        console.log('Error Message', error.message);
      }
    }
    setLoading(false);
  };
  // console.log(loading ? 'Loading...' : JSON.stringify(datas, null, 2));

  const calculateDate = date => {
    let ms = new Date(Date.parse('2012-01-26T13:51:50-07:00'));
    // const date = new Date(Date.now());

    // const diffTime = Math.abs(date - ms);
    // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // const change = date - ms;
    // console.log(new Date(change));
    // console.log(ms);

    const dataaa = new Date(date).toUTCString();
    // console.log(date);
    console.log(dataaa);
  };

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
        <FlatList
          data={datas}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.postContainer}>
              {/* {console.log(JSON.stringify(item, null, 2))} */}
              <View style={styles.name}>
                <View style={styles.profile}>
                  <Image style={{marginRight: 5}} source={Profile}></Image>
                  <AppText style={[styles.text, {color: 'white'}]}>
                    {item.postedBy?.fullName}
                  </AppText>
                </View>
                <AppText style={styles.text}>
                  {calculateDate(item.postedDate)} DAY AGO
                </AppText>
              </View>
              <Image source={{uri: item.assetURL}}></Image>

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
