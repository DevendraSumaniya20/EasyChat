import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import colors from '../styles/colors';

const WrapperContainer = ({
  children,
  StatusBarColor = colors.white,
  barStyle = 'dark-content',
  containerStyles = {},
}) => {
  return (
    <View style={{...styles.container, ...containerStyles}}>
      <StatusBar backgroundColor={StatusBarColor} barStyle={barStyle} />
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

export default WrapperContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
  },
});
