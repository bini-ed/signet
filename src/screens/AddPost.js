import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';

import Back from '../assets/back.png';

import Header from '../components/Header';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import LinearButton from '../components/LinearButton';
import {addPostService, uploadImage} from '../services/postService';
import colors from '../utils/colors';
import RNFetchBlob from 'rn-fetch-blob';
import axios from 'axios';
import API_URL from '../constants/API_URL';

const {width, height} = Dimensions.get('screen');

const AddPost = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState({});
  const [caption, setCaption] = useState('');
  const [error, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [imgLoading, setImageLoading] = useState(false);

  const imageGalleryLaunch = () => {
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
        setImage({});
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = res.assets[0];
        setImage(source);
        setErrorMessage('');
      }
    });
  };

  const handleImageUpload = async () => {
    setImageLoading(true);
    const formData = new FormData();
    formData.append('image', {
      name: image.fileName,
      type: image.type,
      uri: Platform.OS === 'ios' ? image.uri.replace('file://', '') : image.uri,
    });

    try {
      // const {data} = await uploadImage(formData);
      const {data} = await axios.post(
        `${API_URL}general/uploadImage`,
        {
          header: {
            'content-type': 'multipart/form-data',
          },
        },
        formData,
      );
      if (data) console.log('data returned', JSON.stringify(data, null, 2));
    } catch (error) {
      error.response
        ? console.log(
            'error respone',
            JSON.stringify(error.response.data, null, 2),
          )
        : console.log('msg', JSON.stringify(error.message, null, 2));
    }
    setImageLoading(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setErrorMessage('');
    if (!image?.uri || !caption) {
      setErrorMessage('Please Fill the required fields');
    } else {
      const images = {
        name: image.fileName,
        type: image.type,
        uri:
          Platform.OS === 'ios' ? image.uri.replace('file://', '') : image.uri,
      };
      try {
        handleImageUpload();
        // RNFetchBlob.fetch(
        //   'POST',
        //   'https://api.eazynft.co/api/v1/general/uploadImage',
        //   {
        //     'Content-Type': 'multipart/form-data',
        //   },
        //   [
        //     // element with property `filename` will be transformed into `file` in form data
        //     {name: 'image', filename: image.fileName, data: image.uri},
        //   ],
        // )
        //   .then(res => {
        //     let status = res.info().status;

        //     console.log('res', JSON.stringify(res, null, 2));
        //   })
        //   // Something went wrong:
        //   .catch(error => {
        //     if (error.response) {
        //       console.log('error response', error.response.data);
        //     } else {
        //       console.log('Error Message', error.message);
        //     }
        //   });

        // RNFetchBlob.fetch(
        //   'POST',
        //   'https://api.eazynft.co/api/v1/general/uploadImage',
        //   {
        //     'Content-Type': 'multipart/form-data',
        //   },
        //   [
        //     // element with property `filename` will be transformed into `file` in form data
        //     {name: 'image', filename: image.fileName, data: image.uri},
        //   ],
        // ).then(resp => {
        //   console.log('ressss', JSON.stringify(resp, null, 2));
        //   // console.log('your image uploaded successfully');
        // });

        // try {
        //   const {data} = await uploadImage(formData);
        //   if (data) console.log(data);
        // } catch (error) {
        //   error.response
        //     ? console.log(
        //         'respone',
        //         JSON.stringify(error.response.data, null, 2),
        //       )
        //     : console.log(JSON.stringify(error.message, null, 2));
        // }
        // const {data} = await addPostService(caption, image.uri);
        // if (data) {
        //   console.log('Success', data);
        //   setImage('');
        //   setCaption('');
        // }
      } catch (error) {
        if (error.response) {
          console.log('error response', error.response.data);
        } else {
          console.log('Error Message', error.message);
        }
      }
    }
    setLoading(false);
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center',
        flexGrow: 1,
      }}>
      <View
        style={{
          width: '100%',
          flex: 1,
        }}>
        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Back}></Image>
          </TouchableOpacity>
          <AppText style={styles.title}>ADD POST</AppText>
          <View></View>
        </Header>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            width: '100%',
            justifyContent: 'space-between',
          }}>
          {imgLoading && (
            <>
              <ActivityIndicator
                animating={loading}
                size={30}
                color={colors.button}></ActivityIndicator>
              <AppText style={{color: 'white'}}>Loading</AppText>
            </>
          )}
          <View style={{width: '100%'}}>
            <View style={styles.addPost}>
              {image.uri ? (
                <TouchableOpacity
                  style={{
                    width: '100%',
                  }}
                  onPress={imageGalleryLaunch}>
                  <Image
                    source={{uri: image.uri}}
                    style={{width: '100%', height: '100%'}}></Image>
                </TouchableOpacity>
              ) : (
                <AppButton
                  onPress={imageGalleryLaunch}
                  title="SELECT PHOTOS OR VIDEOS"
                  text={styles.selectText}
                  style={styles.appButtonSelect}></AppButton>
              )}
            </View>
            <View style={styles.caption}>
              <AppText style={styles.text}>CAPTION</AppText>
              <TextInput
                onChangeText={text => {
                  setCaption(text);
                  setErrorMessage('');
                }}
                value={caption}
                style={styles.input}></TextInput>
            </View>
            <AppText
              style={{
                color: colors.button,
                textAlign: 'center',
                marginVertical: 20,
              }}>
              {error}
            </AppText>
          </View>
          {loading && (
            <ActivityIndicator
              animating={loading}
              size={40}
              color={colors.button}></ActivityIndicator>
          )}
          <View style={styles.button}>
            <LinearButton text="POST NOW" onPress={handleSubmit}></LinearButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 30,
  },
  addPost: {
    height: height / 3,
    backgroundColor: colors.box,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  caption: {
    width: '100%',
    marginTop: 10,
  },
  input: {
    backgroundColor: colors.box,
    borderRadius: 7,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#908F95',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  appButtonSelect: {
    marginVertical: 21,
    borderColor: '#D7A241',
    borderWidth: 2,
    borderRadius: 7,
    height: 33,
    justifyContent: 'center',
    width: '60%',
  },
  selectText: {
    color: '#D7A241',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});
