import {StyleSheet} from 'react-native';
import fontFamily from '../../styles/fontFamily';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../../styles/responsiveSize';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  descStyle: {
    fontSize: textScale(16),
    fontFamily: fontFamily.regular,
    margin: moderateScale(16),
    color: colors.grey,
    textAlign: 'center',
  },
  bottomText: {
    fontSize: textScale(18),
    fontFamily: fontFamily.regular,
    margin: moderateScale(16),
    color: colors.grey,
    textAlign: 'center',
  },
  borderStyleBase: {
    width: moderateScale(30),
    height: moderateScale(40),
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: moderateScale(30),
    height: moderateScale(45),
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});

export default styles;
