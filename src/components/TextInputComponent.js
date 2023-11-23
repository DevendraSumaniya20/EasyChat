import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Fragment} from 'react';
import {moderateScale, textScale} from '../styles/responsiveSize';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';

const TextInputComponent = ({
  placeholder = '',
  inputStyle = {},

  onchangeText = () => {},
  ...props
}) => {
  return (
    <Fragment>
      <TextInput
        placeholder={placeholder}
        style={{...styles.inputStyle, ...inputStyle}}
        onchangeText={onchangeText}
        {...props}
      />
    </Fragment>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  inputStyle: {
    padding: moderateScale(12),
    borderBottomColor: colors.grey,
    fontFamily: fontFamily.regular,
    fontSize: textScale(16),
    height: moderateScale(42),
  },
});
