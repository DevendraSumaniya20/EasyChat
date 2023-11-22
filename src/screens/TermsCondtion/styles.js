import {StyleSheet} from 'react-native';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logoStyle: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  headingStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: fontFamily.bold,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  descStyle: {
    fontSize: 18,
    fontFamily: fontFamily.regular,
    textAlign: 'center',
    margin: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  textalignMain: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  privacyText: {
    fontSize: 16,
    color: colors.lightBlue,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: fontFamily.regular,
    alignSelf: 'center',
  },
  termsOfserviceText: {
    fontSize: 16,
    color: colors.lightBlue,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: fontFamily.regular,
    alignSelf: 'center',
  },

  agreeandContinueText: {
    fontSize: 30,
    fontFamily: fontFamily.bold,
    color: colors.secondaryColor,
  },
  agreeandContinueTouchable: {
    alignSelf: 'center',
    marginTop: 60,
  },
});

export default styles;
