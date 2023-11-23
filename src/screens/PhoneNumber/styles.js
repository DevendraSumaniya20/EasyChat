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
    textAlign: 'center',
    margin: moderateScaleVertical(16),
  },
  dialCodeStyle: {
    fontSize: textScale(20),
    fontFamily: fontFamily.bold,
  },
  phoneInputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.7,
    paddingHorizontal: moderateScale(8),
  },
  inputStyle: {
    borderBottomColor: colors.grey,
    padding: moderateScale(12),
    fontFamily: fontFamily.regular,
    fontSize: textScale(16),
  },
});

export default styles;
