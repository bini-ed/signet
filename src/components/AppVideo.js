import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import VideoPlayer from 'react-native-video-player';
import colors from '../utils/colors';

const AppVideo = ({video, currentIndex, currentVisibleIndex}) => {
  return (
    <VideoPlayer
      video={video}
      videoWidth={1600}
      videoHeight={1600}
      showDuration
      paused={currentIndex !== currentVisibleIndex}
      autoplay
      disableControlsAutoHide
      selectedVideoTrack={{
        type: 'resolution',
        value: 720,
      }}
      customStyles={{
        controlIcon: {fontSize: 20},
        seekBarKnob: {backgroundColor: colors.button},
        seekBarProgress: {backgroundColor: colors.button},
      }}
      style={{
        width: '100%',
        // height: 400,
      }}
    />
  );
};

export default AppVideo;

const styles = StyleSheet.create({});
