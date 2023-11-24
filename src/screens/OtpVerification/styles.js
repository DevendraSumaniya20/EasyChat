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
  inputStyle: {
    marginRight: moderateScale(8),
    height: moderateScale(42),
    width: moderateScale(42),
    borderBottomWidth: 1,
    textAlign: 'center',
  },
});

export default styles;
