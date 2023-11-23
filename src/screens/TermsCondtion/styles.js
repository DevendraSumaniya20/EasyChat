import {StyleSheet} from 'react-native';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: moderateScale(16),
  },
  logoStyle: {
    width: width / 1.5,
    height: height / 2,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  headingStyle: {
    fontWeight: 'bold',
    fontSize: textScale(32),
    fontFamily: fontFamily.bold,
    alignSelf: 'center',
  },
  descStyle: {
    fontSize: textScale(18),
    fontFamily: fontFamily.regular,
    textAlign: 'center',
    marginTop: moderateScaleVertical(20),
    alignItems: 'center',
    alignSelf: 'center',
  },
  textalignMain: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  privacyText: {
    fontSize: textScale(16),
    color: colors.lightBlue,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: fontFamily.regular,
    alignSelf: 'center',
  },
  termsOfserviceText: {
    fontSize: textScale(16),
    color: colors.lightBlue,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: fontFamily.regular,
    alignSelf: 'center',
  },

  agreeandContinueText: {
    fontSize: textScale(30),
    fontFamily: fontFamily.bold,
    color: colors.secondaryColor,
  },
  agreeandContinueTouchable: {
    alignSelf: 'center',
    marginTop: moderateScaleVertical(60),
  },
});

export default styles;
