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

const PhoneNumber = () => {
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'India',
    dialCode: '+91',
    isoCode: 'IN',
    flag: 'https://cdn.kcak11.com/CountryFlags/countries/in.svg',
  });

  const fetchCountry = data => {
    setSelectedCountry(data);
  };
  return (
    <WrapperContainer containerStyles={{paddingHorizontal: 0}}>
      <HeaderComponents
        centerText={strings.ENTER_YOUR_PHONE_NUMBER}
        containerStyle={{paddingHorizontal: 8}}
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
          <TextInput
            keyboardType="phone-pad"
            placeholder={strings.ENTER_YOUR_PHONE_NUMBER}
            style={{
              paddingVertical: 12,
              borderBottomColor: colors.grey,
              paddingHorizontal: 12,
            }}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default PhoneNumber;
