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

import colors from '../utils/colors';
import AppText from '../components/AppText';
import {Formik} from 'formik';
import AppButton from '../components/AppButton';

const TransferScreen = () => {
  const navigation = useNavigation();
  // const validationSchema = Yup.object().shape({
  //   owner: Yup.string().required().label('Name'),
  //   name: Yup.string().required().label('Name'),
  //   address: Yup.string().required().label('Address'),
  //   price: Yup.string().required().label('Price'),
  //   remark: Yup.string().label('Remark'),
  // });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{alignItems: 'center', flexGrow: 1}}>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Back}></Image>
        </TouchableOpacity>
        <AppText style={styles.title}>TRANSFER OWNERSHIP</AppText>
        <View></View>
      </Header>

      <View style={styles.infoContainer}>
        <AppText style={styles.text}>
          You need a Polygon wallet address to transfer the ownership details.
          This address could be found after you login to your wallet
        </AppText>

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
                <View style={styles.label}>
                  <AppText style={styles.labelText}>CURRENT OWNER</AppText>
                  <TextInput
                    // value={values.oldPassword}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChange('owner')}
                    style={styles.textInput}
                  />
                </View>
                {touched['owner'] && (
                  <AppText style={styles.errorMessage}>
                    {errors['owner']}
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
                  <AppText style={styles.labelText}>PRICE</AppText>
                  <TextInput
                    // value={values.oldPassword}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChange('price')}
                    style={styles.textInput}
                  />
                </View>
                {touched['price'] && (
                  <AppText style={styles.errorMessage}>
                    {errors['price']}
                  </AppText>
                )}

                <View style={styles.label}>
                  <AppText style={styles.labelText}>REMARK</AppText>
                  <TextInput
                    // value={values.oldPassword}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChange('remark')}
                    style={styles.textInput}
                  />
                </View>
                {touched['remark'] && (
                  <AppText style={styles.errorMessage}>
                    {errors['remark']}
                  </AppText>
                )}
              </View>
              <View style={styles.button}>
                <AppButton
                  title="TRANSFER OWNERSHIP"
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

export default TransferScreen;

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
