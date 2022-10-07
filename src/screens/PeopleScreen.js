import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import Logo from '../assets/SignetTagsLogo.png';
import Woman from '../assets/woman.png';

import AppText from '../components/AppText';
import Header from '../components/Header';
import colors from '../utils/colors';
import {getAllUserService} from '../services/userService';

const PeopleScreen = () => {
  const {navigate} = useNavigation();
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllUser();
    return () => {};
  }, []);

  const getAllUser = async () => {
    setLoading(true);
    try {
      const {data} = await getAllUserService();
      setPeople(data.data);
    } catch (error) {
      if (error.response) {
        console.log('error response', error.response.data);
      } else {
        console.log('Error Message', error.message);
      }
    }
    setLoading(false);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header>
        <View></View>
        <Image source={Logo}></Image>
        <View></View>
      </Header>
      {loading ? (
        <ActivityIndicator
          animating={loading}
          color={colors.button}
          size={30}></ActivityIndicator>
      ) : (
        <>
          <TextInput
            style={styles.textInput}
            placeholder="Search People"></TextInput>
          <View style={styles.assetContainer}>
            <AppText style={styles.text}>ASSET OWNER</AppText>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              {people.map((peoples, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.person}
                  onPress={() => navigate('PeopleDetail', {person: peoples})}>
                  <Image source={Woman}></Image>
                  <AppText style={{color: colors.button}}>
                    {peoples.name}
                  </AppText>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </>
      )}
    </ScrollView>
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
  person: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
