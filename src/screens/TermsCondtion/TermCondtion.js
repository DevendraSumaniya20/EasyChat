import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImagePath from '../../constants/ImagePath';
import fontFamily from '../../styles/fontFamily';

const TermsCondtion = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={ImagePath.icLogoBlack} style={styles.logoStyle} />
        <Text style={styles.headingStyle}>Welcome to EasyChat</Text>
        <Text>
          Read our <Text style={styles.privacyText}>Privacy police.</Text>
          <Text>
            Tap "Agree & Continue" to accept the
            <Text style={styles.termsOfserviceText}>Terms of Service.</Text>
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TermsCondtion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logoStyle: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  headingStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: fontFamily.bold,
    alignSelf: 'center',
    marginTop: 30,
  },

  privacyText: {
    fontSize: 16,
    color: 'blue',
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: fontFamily.regular,
  },
  termsOfserviceText: {
    fontSize: 16,
    color: 'blue',
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: fontFamily.regular,
  },
});
