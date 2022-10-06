import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
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
import Header from '../components/Header';
import LinearButton from '../components/LinearButton';
import {editCurrentUser, getSpecificUserById} from '../services/userService';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  address: Yup.string().required().label('Address'),
  about: Yup.string().required().label('About'),
  email: Yup.string().required().email().label('Email'),
  walletAddress: Yup.string().required().label('Wallet Address'),
  profile: Yup.array()
    .nullable()
    .min(1, 'Please upload Profile Picture')
    .label('Profile Picture'),
});

const EditProfile = () => {
  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(false);

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
        const source = {uri: res.assets[0]};
        setFieldValue(name, source);
        console.log('response', JSON.stringify(res));
      }
    });
  };
  useEffect(() => {
    getCurrentUserDetail();
    return () => {};
  }, []);

  const getCurrentUserDetail = async () => {
    setLoading(true);
    try {
      const {data} = await getSpecificUserById('63358288aecb8387cb3a02fd');
      if (data) {
        setCurrentUser(data.data[0]);
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

  const handleUpdateTagUser = async info => {
    setLoading(true);
    try {
      await Promise.all(
        editCurrentUser(info).then(response =>
          getCurrentUserDetail().then(res => alert(response.data.message)),
        ),
      );
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
      {loading ? (
        <ActivityIndicator
          animating={loading}
          size={30}
          color={colors.button}></ActivityIndicator>
      ) : (
        <View style={styles.infoContainer}>
          <Formik
            initialValues={{
              name: currentUser?.name,
              address: currentUser?.address,
              about: currentUser?.about,
              email: currentUser?.email,
              walletAddress: currentUser?.walletAddress,
              profile: '',
            }}
            onSubmit={values => handleUpdateTagUser(values)}
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
                    onPress={() =>
                      imageGalleryLaunch('profile', setFieldValue)
                    }>
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
                    <AppText
                      style={[styles.errorMessage, {textAlign: 'center'}]}>
                      {errors['profile']}
                    </AppText>
                  )}

                  <View style={styles.label}>
                    <AppText style={styles.labelText}>NAME</AppText>
                    <TextInput
                      value={values.name}
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
                      value={values.address}
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
                      value={values.about}
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={handleChange('about')}
                      style={[styles.textInput, {height: 'auto'}]}
                      numberOfLines={5}
                      multiline
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
                      value={values.email}
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
                      value={values.walletAddress}
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={handleChange('walletAddress')}
                      style={styles.textInput}
                    />
                  </View>
                  {touched['walletAddress'] && (
                    <AppText style={styles.errorMessage}>
                      {errors['walletAddress']}
                    </AppText>
                  )}
                </View>
                <View style={styles.button}>
                  <LinearButton
                    text="SAVE CHANGES"
                    onPress={handleSubmit}></LinearButton>
                </View>
              </View>
            )}
          </Formik>
        </View>
      )}
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
