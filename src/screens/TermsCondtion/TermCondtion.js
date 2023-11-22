import {Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ImagePath from '../../constants/ImagePath';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import NavigationString from '../../constants/NavigationString';
import WrapperContainer from '../../components/WrapperContainer';
import strings from '../../constants/lang';
import colors from '../../styles/colors';

const TermsCondtion = () => {
  const Navigation = useNavigation();

  return (
    <WrapperContainer containerStyles={{alignItems: 'center'}}>
      <Image source={ImagePath.icLogoBlack} style={styles.logoStyle} />
      <Text style={styles.headingStyle}>{strings.WELCOME_TO_EASYCHAT}</Text>
      <Text style={styles.descStyle}>
        {strings.READ_OUR}
        <Text style={{color: colors.lightBlue}}>
          {''} {strings.PRIVACY_POLICY}
        </Text>
        {strings.TAP_AGREE_AND_CONTINUE_TO_ACCEPT_THE}
        <Text style={{color: colors.lightBlue}}>
          {''} {strings.TERMS_OF_SERVICE}.
        </Text>
      </Text>

      <TouchableOpacity
        onPress={() => Navigation.navigate(NavigationString.PHONE_NUMBER)}
        activeOpacity={0.7}
        style={styles.agreeandContinueTouchable}>
        <Text style={styles.agreeandContinueText}>
          {strings.AGREE_AND_CONTINUE}
        </Text>
      </TouchableOpacity>
    </WrapperContainer>
  );
};

export default TermsCondtion;
