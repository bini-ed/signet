import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import LinearButton from '../components/LinearButton';
import colors from '../utils/colors';

const RefernceScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            justifyContent: 'space-between',
          }}>
          <AppButton
            title="EDIT PROFILE"
            onPress={() => navigation.navigate('EditProfile')}
            text={styles.detailTxt}
            style={styles.appButtonEdit}></AppButton>
          <View
            style={{
              backgroundColor: colors.box,
              width: '40%',
              padding: 10,
              borderRadius: 7,
            }}>
            <AppText
              style={{
                color: colors.white,
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 21,
              }}>
              RARITY
            </AppText>
            <AppText
              style={{
                color: colors.button,
                fontSize: 40,
                fontWeight: '400',
                lineHeight: 60,
              }}>
              100
            </AppText>
          </View>
        </View>
        <View>
          <AppText
            style={{
              color: colors.verify,
              textAlign: 'center',
              fontSize: 24,
              fontWeight: '400',
              lineHeight: 36,
            }}>
            VERIFIED
          </AppText>
          <AppText
            style={{
              color: colors.white,
              textAlign: 'center',
              fontSize: 16,
              fontWeight: '400',
              lineHeight: 24,
            }}>
            This is an authentic product from SIgnet Tags
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
      </View>

      <View style={styles.button}>
        <AppButton
          title="SUB"
          text={styles.subText}
          style={styles.appButtonSub}
          onPress={() => navigate('Detail')}></AppButton>

        <LinearButton text="MAIN"></LinearButton>
      </View>
    </ScrollView>
  );
};

export default RefernceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  appButtonEdit: {
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
  appButtonSub: {
    marginVertical: 21,
    borderColor: '#D7A241',
    borderWidth: 2,
    borderRadius: 7,
    height: 51,
    justifyContent: 'center',
  },
  subText: {
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
});
