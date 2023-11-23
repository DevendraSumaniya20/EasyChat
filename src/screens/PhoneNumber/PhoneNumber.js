import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import strings from '../../constants/lang';
import styles from './styles';
import HeaderComponents from '../../components/HeaderComponents';
import HorizontalLine from '../../components/HorizontalLine';
import ImagePath from '../../constants/ImagePath';
import colors from '../../styles/colors';
import CountriesPicker from '../../components/CountriesPicker';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import {useNavigation} from '@react-navigation/native';
import NavigationString from '../../constants/NavigationString';
import TextInputComponent from '../../components/TextInputComponent';

const PhoneNumber = () => {
  const navigation = useNavigation();

  const [selectedCountry, setSelectedCountry] = useState({
    name: 'India',
    dialCode: '+91',
    isoCode: 'IN',
    flag: 'https://cdn.kcak11.com/CountryFlags/countries/in.svg',
  });

  const fetchCountry = data => {
    setSelectedCountry(data);
  };

  const leftCustomView = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={ImagePath.icBack} />
      </TouchableOpacity>
    );
  };

  return (
    <WrapperContainer containerStyles={{paddingHorizontal: 0}}>
      <HeaderComponents
        centerText={strings.ENTER_YOUR_PHONE_NUMBER}
        containerStyle={{paddingHorizontal: 8}}
        leftCustomView={leftCustomView}
        isLeftView={true}
        onPressRight={() => {
          navigation.navigate(NavigationString.EDIT_PROFILE);
        }}
      />
      <Text style={styles.descStyle}>{strings.EASYCHAT_WILL_SEND}</Text>
      <HorizontalLine />
      <CountriesPicker
        fetchCountry={fetchCountry}
        value={selectedCountry?.name}
      />
      <View style={styles.phoneInputStyle}>
        <Text style={styles.dialCodeStyle}>{selectedCountry?.dialCode}</Text>
        <View style={{flex: 1}}>
          <TextInputComponent
            keyboardType="phone-pad"
            placeholder={strings.ENTER_YOUR_PHONE_NUMBER}
            style={styles.inputStyle}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default PhoneNumber;
