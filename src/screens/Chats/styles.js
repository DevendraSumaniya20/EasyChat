import {StyleSheet} from 'react-native';
import fontFamily from '../../styles/fontFamily';
import {moderateScale, textScale} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  listEmptyStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(16),
  },
  commStyle: {
    fontSize: textScale(22),
    fontFamily: fontFamily.regular,
  },
  headingSyle: {
    fontSize: textScale(26),
    fontFamily: fontFamily.bold,
  },
});

export default styles;
