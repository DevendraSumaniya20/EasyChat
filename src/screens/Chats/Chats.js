import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import HeaderComponents from '../../components/HeaderComponents';
import strings from '../../constants/lang';
import HorizontalLine from '../../components/HorizontalLine';
import ImagePath from '../../constants/ImagePath';
import {useNavigation} from '@react-navigation/native';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import NavigationString from '../../constants/NavigationString';
import styles from './styles';
import colors from '../../styles/colors';

const Chats = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  const leftCustomView = () => {
    return (
      <TouchableOpacity>
        {data.length > 0 ? <Text>Edit</Text> : <View style={{height: 20}} />}
        <Text style={styles.headingSyle}>{strings.CHATS}</Text>
      </TouchableOpacity>
    );
  };

  const onPressRight = () => {
    navigation.navigate(NavigationString.USERS);
  };

  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <View>
          <Text>Flat item</Text>
        </View>
      );
    },
    [data],
  );

  const listEmptyComponent = useCallback(() => {
    return (
      <View style={styles.listEmptyStyle}>
        <View style={{}}>
          <Text style={styles.commStyle}>
            {strings.TAP_ON} <Image source={ImagePath.icEdit} />
            <Text style={styles.commStyle}>{strings.IN_THE_TOP_RIGHT_}</Text>
          </Text>
        </View>
        <Text
          style={{
            ...styles.commStyle,
            color: colors.grey,
            marginTop: moderateScaleVertical(16),
          }}>
          {strings.YOU_CAN_CHAT_WITH_CONTACTS}
        </Text>
      </View>
    );
  }, [data]);

  return (
    <WrapperContainer>
      <HeaderComponents
        rightPressActive={false}
        // centerText={''}
        containerStyle={{paddingHorizontal: 8}}
        leftCustomView={leftCustomView}
        isLeftView={true}
        rightImg={ImagePath.icEdit}
        onPressRight={() => {
          onPressRight();
        }}
      />

      <HorizontalLine />
      <FlatList
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={listEmptyComponent}
        contentContainerStyle={{flexGrow: 1}}
      />
    </WrapperContainer>
  );
};

export default Chats;
