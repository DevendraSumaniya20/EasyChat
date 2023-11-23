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
    fontSize: textScale(12),
    fontFamily: fontFamily.blackFont,
    flex: 1,
    margin: moderateScale(16),
    color: colors.grey,
  },
  inputStyle: {
    borderBottomColor: colors.grey,
    padding: moderateScale(12),
    fontFamily: fontFamily.regular,
    fontSize: textScale(16),
  },
});

export default styles;
