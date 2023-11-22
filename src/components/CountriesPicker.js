import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import ImagePath from '../constants/ImagePath';
import colors from '../styles/colors';
import Modal from 'react-native-modal';
import HeaderComponents from './HeaderComponents';
import countries from './countries';
import HorizontalLine from './HorizontalLine';
import fontFamily from '../styles/fontFamily';

const CountriesPicker = ({fetchCountry = () => {}, value}) => {
  const [data, setData] = useState(countries);

  const [showModal, setShowModal] = useState(false);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{marginHorizontal: 16}}
        onPress={() => {
          onSelectCountry(item);
        }}>
        <Text>
          {item?.name} ({item?.dialCode})
        </Text>
      </TouchableOpacity>
    );
  };

  const onSelectCountry = item => {
    fetchCountry(item);
    setShowModal(false);
  };
  return (
    <Fragment>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.container}
        onPress={() => {
          setShowModal(true);
        }}>
        <Text style={styles.valueStyleText}>{value}</Text>
        <Image source={ImagePath.icForward} />
      </TouchableOpacity>

      <Modal
        isVisible={showModal}
        style={{backgroundColor: colors.white, margin: 8}}>
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1}}>
            <HeaderComponents
              centerText="select your country"
              onPressRight={() => {
                setShowModal(false);
              }}
            />
            <View>
              <FlatList
                data={data}
                renderItem={renderItem}
                ItemSeparatorComponent={() => (
                  <HorizontalLine lineStyle={{marginVertical: 12}} />
                )}
                ListHeaderComponent={() => <View style={{height: 20}} />}
              />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </Fragment>
  );
};

export default CountriesPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  valueStyleText: {
    color: colors.lightBlue,
    fontFamily: fontFamily.bold,
    fontSize: 18,
  },
});
