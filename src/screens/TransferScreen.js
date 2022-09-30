import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';

import {Formik} from 'formik';
import * as Yup from 'yup';

import Back from '../assets/back.png';

import colors from '../utils/colors';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import transferService from '../services/transferService';

const TransferScreen = () => {
  const navigation = useNavigation();

  const validationSchema = Yup.object().shape({
    currentOwner: Yup.string().required().label('Current Owner'),
    name: Yup.string().required().label('Name'),
    address: Yup.string().required().label('Address'),
    price: Yup.string().required().label('Price'),
    remarks: Yup.string().label('Remark'),
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async value => {
    setLoading(true);
    try {
      const {data} = await transferService(value);
      if (data) console.log('Success', data);
    } catch (error) {
      if (error.response) {
        console.log('error response', error.response.data.msg);
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
        <AppText style={styles.title}>TRANSFER OWNERSHIP</AppText>
        <View></View>
      </Header>

      <View style={styles.infoContainer}>
        {loading && (
          <ActivityIndicator
            animating={loading}
            size={30}
            color={colors.button}></ActivityIndicator>
        )}
        <AppText style={styles.text}>
          You need a Polygon wallet address to transfer the ownership details.
          This address could be found after you login to your wallet
        </AppText>

        <Formik
          initialValues={{
            currentOwner: '',
            name: '',
            address: '',
            price: '',
            remarks: '',
          }}
          onSubmit={values => handleSubmit(values)}
          validationSchema={validationSchema}>
          {({handleChange, errors, values, handleSubmit, touched}) => (
            <View style={styles.form}>
              <View>
                <View style={styles.label}>
                  <AppText style={styles.labelText}>CURRENT OWNER</AppText>
                  <TextInput
                    value={values.currentOwner}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChange('currentOwner')}
                    style={styles.textInput}
                  />
                </View>
                {touched['currentOwner'] && (
                  <AppText style={styles.errorMessage}>
                    {errors['currentOwner']}
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
                  <AppText style={styles.labelText}>PRICE</AppText>
                  <TextInput
                    value={values.price}
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
                    value={values.remarks}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={handleChange('remarks')}
                    style={styles.textInput}
                  />
                </View>
                {touched['remarks'] && (
                  <AppText style={styles.errorMessage}>
                    {errors['remarks']}
                  </AppText>
                )}
              </View>
              <View style={styles.button}>
                <AppButton
                  onPress={handleSubmit}
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
    width: '100%',
    paddingHorizontal: 20,
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
  },
});
