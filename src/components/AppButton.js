import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AppButton = ({title, text, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
const styles = StyleSheet.create({
  button: {width: '100%'},
});
