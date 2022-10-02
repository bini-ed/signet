import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const LinearButton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={{width: '100%'}} onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#facd70', '#dca848', '#d7a241']}
        style={{
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 7,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            textAlign: 'center',
            fontWeight: '400',
            lineHeight: 24,
            fontFamily: 'Poppins-Regular',
          }}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LinearButton;

const styles = StyleSheet.create({});
