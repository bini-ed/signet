import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import colors from '../utils/colors';
import Logo from '../assets/SignetTagsLogo.png';
import Back from '../assets/back.png';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Header from '../components/Header';

const {width} = Dimensions.get('screen');

const DetailScreen = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      name: 'TAG SCANS',
      value: 121,
    },
    {
      id: 2,
      name: 'RARITY',
      value: 100,
    },
    {
      id: 3,
      name: 'CLAIMED',
      value: 90,
    },
    {
      id: 4,
      name: 'RESALE',
      value: 3,
    },
  ];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'space-between',
      }}>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Back}></Image>
        </TouchableOpacity>
        <Image source={Logo} style={styles.logo}></Image>
        <View></View>
      </Header>

      <View style={styles.boxContainer}>
        {data.map(item => (
          <View style={styles.box}>
            <AppText style={styles.nameTxt}>{item.name}</AppText>
            <AppText style={styles.numberTxt}>{item.value}</AppText>
          </View>
        ))}
      </View>

      <View style={styles.aboutContainer}>
        <AppText style={styles.txt}>ABOUT</AppText>
        <AppText style={styles.about}>
          The photographs describes the fight of young souls seeking escape from
          old rituals in order to build their own story and future.
        </AppText>

        <View style={styles.boxAbout}>
          <View style={styles.infoLabel}>
            <AppText style={styles.infoTxt}>CREATED BY</AppText>
            <AppText style={styles.txtValue}>Distinct Cloud Labs LLP</AppText>
          </View>

          <View style={styles.infoLabel}>
            <AppText style={styles.infoTxt}>OWNER</AppText>
            <AppText style={styles.txtValue}>Manish Gautam</AppText>
          </View>

          <View style={styles.infoLabel}>
            <AppText style={styles.infoTxt}>PURCHASED ON</AppText>
            <AppText style={styles.txtValue}>02 Apr 2022</AppText>
          </View>

          <View style={styles.infoLabel}>
            <AppText style={styles.infoTxt}>MANUFACTURED</AppText>
            <AppText style={styles.txtValue}>01 Apr 2022</AppText>
          </View>
          <View style={styles.infoLabel}>
            <AppText style={styles.infoTxt}>CREATED BY</AppText>
            <AppText style={styles.txtValue}>Distinct Cloud Labs</AppText>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <AppButton
          title="VERIFY ON POLYGON"
          text={styles.detailTxt}
          style={styles.appButtonDetail}></AppButton>
        <AppButton
          title="TRANSFER OWNERSHIP"
          text={styles.viewTxt}
          style={styles.appButtonView}></AppButton>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  box: {
    backgroundColor: colors.box,
    margin: 10,
    width: width / 2 - 20,
    height: 106,
    borderRadius: 7,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  numberTxt: {
    color: colors.button,
    fontSize: 40,
    fontWeight: '400',
    lineHeight: 60,
  },
  nameTxt: {
    fontSize: 14,
    lineHeight: 21,
  },
  txt: {
    color: '#908F95',
    fontSize: 16,
    width: '90%',
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  aboutContainer: {
    width: width - 20,
  },
  about: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: colors.white,
    marginVertical: 10,
  },
  boxAbout: {
    backgroundColor: colors.box,
    borderRadius: 7,
    paddingVertical: 10,
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
  txtValue: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
    color: colors.white,
    flex: 0.6,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  appButtonDetail: {
    marginVertical: 21,
    borderColor: '#D7A241',
    borderWidth: 2,
    borderRadius: 7,
    height: 51,
    justifyContent: 'center',
    width: '90%',
  },
  detailTxt: {
    color: '#D7A241',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
  },

  appButtonView: {
    backgroundColor: '#D7A241',
    borderColor: '#FBCE71',
    borderWidth: 1,
    borderRadius: 7,
    height: 51,
    justifyContent: 'center',
    width: '90%',
  },
  viewTxt: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 24,
  },
});
