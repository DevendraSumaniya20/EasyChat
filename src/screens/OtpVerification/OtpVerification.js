import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import strings from '../../constants/lang';
import {useNavigation} from '@react-navigation/native';
import ImagePath from '../../constants/ImagePath';
import NavigationString from '../../constants/NavigationString';
import HeaderComponents from '../../components/HeaderComponents';
import HorizontalLine from '../../components/HorizontalLine';
import styles from './styles';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';

import OtpInputs from 'react-native-otp-inputs';
import actions from '../../redux/actions';
import {otpVerify} from '../../redux/actions/auth';

const OtpVerification = ({route}) => {
  const navigation = useNavigation();

  const {data} = route?.params;

  const leftCustomView = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={ImagePath.icBack} />
        {/* <Text>{strings.EDIT_NUMBER}</Text> */}
      </TouchableOpacity>
    );
  };

  const handleChange = async value => {
    if (value.length >= 6) {
      try {
        let res = await actions.otpVerify({
          otp: value,
          user_id: data._id,
        });
        console.log('api success', res);
      } catch (error) {
        console.log('error in otp verify', error);
        Alert.alert(error?.message);
      }
    }
  };

  return (
    <WrapperContainer containerStyles={{paddingHorizontal: 0}}>
      <HeaderComponents
        centerText={`${data?.selectedCountry?.dialCode} ${data?.phoneNumber}`}
        containerStyle={{paddingHorizontal: 8}}
        leftCustomView={leftCustomView}
        isLeftView={true}
        isRight={false}
        onPressRight={() => {
          navigation.navigate(NavigationString.CHATS);
        }}
      />

      <HorizontalLine />
      <Text
        style={{
          ...styles.descStyle,
          marginVertical: moderateScaleVertical(24),
        }}>
        {strings.WE_HAVE_SENT_YOU_AN_SMS}
      </Text>
      <Text style={styles.descStyle}>
        {strings.TAP_AGREE_AND_CONTINUE_TO_ACCEPT_THE}
      </Text>

      <View style={{alignItems: 'center', marginHorizontal: moderateScale(16)}}>
        <OtpInputs
          placeholder="*"
          handleChange={handleChange}
          numberOfInputs={6}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: moderateScaleVertical(42),
          }}
          inputStyles={styles.inputStyle}
        />
      </View>
      <View
        style={{marginTop: moderateScaleVertical(42), alignItems: 'center'}}>
        <Text style={styles.bottomText}>{strings.RESEND_CODE}</Text>
      </View>
    </WrapperContainer>
  );
};

export default OtpVerification;
