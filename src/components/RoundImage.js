import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, textScale} from '../styles/responsiveSize';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';

const RoundImage = ({image = '', size = 80, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        height: moderateScale(size),
        width: moderateScale(size),
        borderRadius: moderateScale(size / 2),
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.grey,
      }}>
      {!!image ? (
        <Image
          style={{
            height: moderateScale(size),
            width: moderateScale(size),
            borderRadius: moderateScale(size / 2),
          }}
          source={{uri: image}}
        />
      ) : (
        <Text style={styles.fontStyle}>add Photo</Text>
      )}
    </TouchableOpacity>
  );
};

export default RoundImage;

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: textScale(12),
    fontFamily: fontFamily.blackFont,
    color: colors.lightBlue,
  },
});
