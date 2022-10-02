import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Logo from '../assets/SignetTagsLogo.png';
import Verified from '../assets/tagVerified.png';
import Cloth from '../assets/cloth.png';

import colors from '../utils/colors';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Header from '../components/Header';
import LinearButton from '../components/LinearButton';

const {width, height} = Dimensions.get('window');
const VerifyScreen = () => {
  const {navigate} = useNavigation();
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={styles.infoContainer}>
        <Header>
          <View></View>
          <Image source={Logo} style={styles.logo}></Image>
          <View></View>
        </Header>
        <Image
          source={Cloth}
          style={{height: 137, width: 122, borderRadius: 7}}></Image>
        <Image source={Verified} style={styles.verLogo}></Image>
        <AppText style={styles.verifyTxt}>VERIFIED</AppText>
        <AppText style={styles.verifiedTxt}>
          This is an authentic product from Signet Tags
        </AppText>

        <View style={styles.box}>
          <View style={styles.infoLabel}>
            <AppText style={styles.infoTxt}>CREATED BY</AppText>
            <AppText style={styles.txt}>Distinct Cloud Labs LLP</AppText>
          </View>

          <View style={styles.infoLabel}>
            <AppText style={styles.infoTxt}>OWNER</AppText>
            <AppText style={styles.txt}>Manish Gautam</AppText>
          </View>

          <View style={styles.infoLabel}>
            <AppText style={styles.infoTxt}>PURCHASED ON</AppText>
            <AppText style={styles.txt}>02 Apr 2022</AppText>
          </View>

          <View style={styles.infoLabel}>
            <AppText style={styles.infoTxt}>MANUFACTURED</AppText>
            <AppText style={styles.txt}>01 Apr 2022</AppText>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <AppButton
          title="DETAILS"
          text={styles.detailTxt}
          style={styles.appButtonDetail}
          onPress={() => navigate('Detail')}></AppButton>
        <LinearButton
          text="VIEW ON METAVERSE"
          onPress={() => navigate('Refernce')}></LinearButton>
      </View>
    </ScrollView>
  );
};

export default VerifyScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.appBackground,
    paddingHorizontal: 20,
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  verLogo: {
    width: 185,
    height: 185,
    marginTop: 10,
  },
  verifyTxt: {
    color: colors.verify,
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 10,
  },
  infoLabel: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  verifiedTxt: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.white,
    marginBottom: 10,
  },
  txt: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
    color: colors.white,
    flex: 0.6,
  },
  infoTxt: {
    fontSize: 16,
    fontWeight: '400',
    color: '#908F95',
    textAlign: 'right',
    flex: 0.4,
  },
  box: {
    width: '100%',
    backgroundColor: colors.box,
    borderRadius: 7,
    paddingVertical: 10,
  },
  appButtonDetail: {
    marginVertical: 21,
    borderColor: '#D7A241',
    borderWidth: 2,
    borderRadius: 7,
    height: 51,
    justifyContent: 'center',
    width: '100%',
  },
  detailTxt: {
    color: '#D7A241',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});
