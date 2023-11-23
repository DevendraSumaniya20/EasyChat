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
import {useNavigation} from '@react-navigation/native';
import ImagePath from '../../constants/ImagePath';
import NavigationString from '../../constants/NavigationString';
import RoundImage from '../../components/RoundImage';
import {moderateScale} from '../../styles/responsiveSize';
import TextInputComponent from '../../components/TextInputComponent';
import ImagePicker from 'react-native-image-crop-picker';
import {androidCameraPermission} from '../../utils/permissions';

const EditProfile = () => {
  const navigation = useNavigation();

  const [state, setState] = useState({
    image: '',
    name: '',
  });

  const {image, name} = state;

  const updateState = data => {
    setState({...state, ...data});
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

  const selectPhoto = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus) {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(res => {
        console.log(res);
        updateState({image: res.path});
      });
    }
  };

  return (
    <WrapperContainer containerStyles={{paddingHorizontal: 0}}>
      <HeaderComponents
        centerText={strings.EDIT_PROFILE}
        containerStyle={{paddingHorizontal: 8}}
        leftCustomView={leftCustomView}
        isLeftView={true}
        onPressRight={() => {
          navigation.navigate(NavigationString.OTP_VERIFICATION);
        }}
      />

      <HorizontalLine />
      <View style={{margin: moderateScale(16)}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <RoundImage onPress={selectPhoto} image={image} />
          <Text style={styles.descStyle}>{strings.ENTER_YOUR_NAME}</Text>
        </View>
      </View>
      <HorizontalLine />
      <TextInputComponent placeholder={strings.YOUR_NAME} />
      <HorizontalLine />
    </WrapperContainer>
  );
};

export default EditProfile;
