import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import HeaderComponents from '../../components/HeaderComponents';
import WrapperContainer from '../../components/WrapperContainer';
import ImagePath from '../../constants/ImagePath';
import HorizontalLine from '../../components/HorizontalLine';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import RoundImage from '../../components/RoundImage';
import actions from '../../redux/actions';
import NavigationString from '../../constants/NavigationString';

const Users = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await actions.fetchUsers();

      console.log('res fecth users', res);

      if (!!res?.data) {
        setData(res.data.users);
      }
    } catch (error) {
      console.log('error fetching data', error);
    }
  };

  const leftCustomView = () => {
    return (
      <TouchableOpacity>
        {data.length > 0 ? <Text>Edit</Text> : <View style={{height: 20}} />}
        <Text style={styles.headingSyle}>{strings.CHATS}</Text>
      </TouchableOpacity>
    );
  };

  const onPressRight = () => {
    navigation.goBack();
  };

  const onPressItem = useCallback(item => {
    navigation.navigate(NavigationString.MESSAGE, {data: item});
  }, []);

  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <TouchableOpacity
          onPress={() => onPressItem(item)}
          activeOpacity={0.7}
          style={styles.headerStyle}>
          <RoundImage image={item?.profileImage} size={40} />
          <Text style={styles.userName}>{item?.name}</Text>
        </TouchableOpacity>
      );
    },
    [data],
  );

  const listEmptyComponent = useCallback(() => {
    return (
      <View style={styles.listEmptyStyle}>
        <Text>No User Found</Text>
      </View>
    );
  }, [data]);

  const listHeaderComponent = useCallback(() => {
    return (
      <View style={styles.headerStyle}>
        <RoundImage image={ImagePath.icGroup} isStatic={true} size={40} />
        <Text style={styles.newGroupText}>{strings.NEW_GROUP}</Text>
      </View>
    );
  }, [data]);

  return (
    <WrapperContainer>
      <HeaderComponents
        rightPressActive={false}
        centerText={strings.NEW_CHAT}
        containerStyle={{paddingHorizontal: 8}}
        rightText={strings.CANCEL}
        rightTextStyle={{color: colors.lightBlue}}
        onPressRight={onPressRight}
      />

      <HorizontalLine />
      <FlatList
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={listEmptyComponent}
        contentContainerStyle={{flexGrow: 1}}
        ListHeaderComponent={listHeaderComponent}
        ItemSeparatorComponent={() => <HorizontalLine />}
      />
    </WrapperContainer>
  );
};

export default Users;
