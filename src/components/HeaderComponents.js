import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import strings from '../constants/lang';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';

const HeaderComponents = ({
  centerText = '',
  rightText = strings.DONE,
  leftCustomView = () => {},
  isLeftView = false,
  containerStyle = {},
  rightTextStyle = {},
  onPressRight = () => {},
  isRight = true,
  rightPressActive = true,
  rightImg = '',
}) => {
  return (
    <View style={{...styles.container, ...containerStyle}}>
      {isLeftView ? leftCustomView() : <View />}
      <Text style={{...styles.centerTextStyle}}>{centerText}</Text>
      {isRight ? (
        <TouchableOpacity onPress={onPressRight} disabled={rightPressActive}>
          {rightImg ? (
            <Image source={rightImg} />
          ) : (
            <Text style={{...styles.rightTextStyle, ...rightTextStyle}}>
              {rightText}
            </Text>
          )}
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

export default HeaderComponents;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
    paddingHorizontal: 12,
  },
  centerTextStyle: {
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: 24,
  },
  rightTextStyle: {
    color: colors.grey,
    fontFamily: fontFamily.regular,
    fontSize: 16,
  },
});
