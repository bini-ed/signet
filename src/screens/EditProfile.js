import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Back from '../assets/back.png';
import Profile from '../assets/profile.png';

import colors from '../utils/colors';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Header from '../components/Header';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  address: Yup.string().required().label('Address'),
  about: Yup.string().required().label('About'),
  email: Yup.string().required().email().label('Email'),
  wallet: Yup.string().required().label('Wallet Address'),
  // profile: Yup.string().required().label('Profile Picture'),
  profile: Yup.array()
    .min(1, 'Please upload Profile Picture')
    .label('Profile Picture'),
});

const EditProfile = () => {
  const navigation = useNavigation();

  const imageGalleryLaunch = (name, setFieldValue) => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = {uri: res.uri};
        setFieldValue(name, source);
        console.log('response', JSON.stringify(res));
      }
    });
  };
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{alignItems: 'center', flexGrow: 1}}>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Back}></Image>
        </TouchableOpacity>
        <AppText style={styles.title}>EDIT PROFILE</AppText>
        <View></View>
      </Header>

      <View style={styles.infoContainer}>
        <Formik
          initialValues={{
            name: '',
            address: '',
            about: '',
            email: '',
            wallet: '',
            profile: [],
          }}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}>
          {({
            handleChange,
            errors,
            values,
            handleSubmit,
            touched,
            setFieldValue,
          }) => (
            <View style={styles.form}>
              <View>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50%',
                    alignSelf: 'center',
                    marginVertical: 10,
                    marginBottom: 20,
                  }}
                  onPress={() => imageGalleryLaunch('profile', setFieldValue)}>
                  {!values.profile[0] ? (
                    <Image
                      source={Profile}
                      style={{
                        width: 68,
                        height: 68,
                        borderRadius: 50,
                      }}></Image>
                  ) : (
                    <Image
                      source={{uri: values.profile[0].uri}}
                      style={{
                        width: 68,
                        height: 68,
                        borderRadius: 50,
                      }}></Image>
                  )}

                  <AppText style={styles.txt}>CHANGE AVATAR</AppText>
                </TouchableOpacity>
                {touched['profile'] && (
                  <AppText style={[styles.errorMessage, {textAlign: 'center'}]}>
                    {errors['profile']}
                  </AppText>
                )}

                <View style={styles.label}>
                  <AppText style={styles.labelText}>NAME</AppText>
                  <TextInput
                    // value={values.oldPassword}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChange('name')}
                    style={styles.textInput}
                  />
                </View>
                {touched['name'] && (
                  <AppText style={styles.errorMessage}>
                    {errors['name']}
                  </AppText>
                )}

                <View style={styles.label}>
                  <AppText style={styles.labelText}>ADDRESS</AppText>
                  <TextInput
                    // value={values.oldPassword}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChange('address')}
                    style={styles.textInput}
                  />
                </View>
                {touched['address'] && (
                  <AppText style={styles.errorMessage}>
                    {errors['address']}
                  </AppText>
                )}

                <View style={styles.label}>
                  <AppText style={styles.labelText}>ABOUT YOU</AppText>
                  <TextInput
                    // value={values.oldPassword}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChange('about')}
                    style={styles.textInput}
                  />
                </View>
                {touched['about'] && (
                  <AppText style={styles.errorMessage}>
                    {errors['about']}
                  </AppText>
                )}

                <View style={styles.label}>
                  <AppText style={styles.labelText}>EMAIl ADDRESS</AppText>
                  <TextInput
                    // value={values.oldPassword}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChange('email')}
                    style={styles.textInput}
                  />
                </View>
                {touched['email'] && (
                  <AppText style={styles.errorMessage}>
                    {errors['email']}
                  </AppText>
                )}

                <View style={styles.label}>
                  <AppText style={styles.labelText}>WALLET ADDRESS</AppText>
                  <TextInput
                    // value={values.oldPassword}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChange('wallet')}
                    style={styles.textInput}
                  />
                </View>
                {touched['email'] && (
                  <AppText style={styles.errorMessage}>
                    {errors['wallet']}
                  </AppText>
                )}
              </View>
              <View style={styles.button}>
                <AppButton
                  onPress={handleSubmit}
                  title="SAVE CHANGES"
                  text={styles.transferTxt}
                  style={styles.appButtonTransfer}></AppButton>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 30,
  },
  txt: {
    color: colors.button,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: colors.white,
  },
  infoContainer: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  form: {
    width: '100%',
    flexGrow: 1,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  labelText: {
    color: '#908F95',
  },
  textInput: {
    backgroundColor: '#1B1A1E',
    height: 56,
    borderRadius: 7,
    marginVertical: 10,
  },
  appButtonTransfer: {
    backgroundColor: '#D7A241',
    borderColor: '#FBCE71',
    borderWidth: 1,
    borderRadius: 7,
    height: 51,
    justifyContent: 'center',
  },
  transferTxt: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 24,
  },

  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  errorMessage: {
    color: colors.button,
    marginBottom: 10,
  },
});
