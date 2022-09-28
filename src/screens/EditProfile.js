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
import Header from '../components/Header';

import Back from '../assets/back.png';
import Profile from '../assets/profile.png';

import colors from '../utils/colors';
import AppText from '../components/AppText';
import {Formik} from 'formik';
import AppButton from '../components/AppButton';

const EditProfile = () => {
  const navigation = useNavigation();
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
          // initialValues={{
          //   oldPassword: '',
          //   newPassword: '',
          //   confirmPassword: '',
          //   id: authContext.user['id'],
          // }}
          onSubmit={values => console.log(values)}
          // validationSchema={validationSchema}
        >
          {({handleChange, errors, values, handleSubmit, touched}) => (
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
                  }}>
                  <Image
                    source={Profile}
                    style={{height: 68, width: 68}}></Image>
                  <AppText style={styles.txt}>CHANGE AVATAR</AppText>
                </TouchableOpacity>

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
    width: '90%',
    alignItems: 'center',
    flex: 1,
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
    width: '90%',
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
});
