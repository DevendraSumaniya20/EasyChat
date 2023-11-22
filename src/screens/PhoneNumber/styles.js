import {StyleSheet} from 'react-native';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  descStyle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    textAlign: 'center',
    margin: 16,
  },
  dialCodeStyle: {
    fontSize: 20,
    fontFamily: fontFamily.bold,
  },
  phoneInputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.7,
    phoneInputStyle: 8,
  },
});

export default styles;
