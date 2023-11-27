import React, {useState, useCallback, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import WrapperContainer from '../../components/WrapperContainer';
import ImagePath from '../../constants/ImagePath';
import RoundImage from '../../components/RoundImage';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';

const Message = ({route, navigation}) => {
  const [messages, setMessages] = useState([]);
  const {data} = route.params;

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'kam kar taru',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: ImagePath.icChats,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages(prevMessages => GiftedChat.append(prevMessages, newMessages));
  }, []);

  const renderActions = useCallback(() => {
    return (
      <TouchableOpacity>
        <Image source={ImagePath.icPlus} />
      </TouchableOpacity>
    );
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={ImagePath.icBack} style={styles.backIcon} />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <RoundImage image={data?.profileImage} size={40} />
            <View style={{marginLeft: moderateScale(100)}}>
              <Text style={styles.nameText}>{data?.name}</Text>
            </View>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity>
              <Image source={ImagePath.icVideo} style={styles.headerIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.callIconContainer}>
              <Image source={ImagePath.icCalls} style={styles.headerIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <ImageBackground
        source={ImagePath.icBigLight}
        style={styles.imageBackground}>
        <GiftedChat
          messages={messages}
          onSend={onSend}
          user={{
            _id: 1,
          }}
          textInputStyle={styles.textInputStyle}
          renderInputToolbar={props => (
            <InputToolbar {...props} containerStyle={styles.inputToolbar} />
          )}
          renderActions={renderActions}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeAreaView: {
    paddingBottom: moderateScaleVertical(10),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(16),
    paddingBottom: moderateScaleVertical(10),
    borderBottomWidth: 0.6,
    borderBottomColor: colors.grey,
  },
  backIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: moderateScale(80),
  },
  nameText: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(16),
    marginLeft: moderateScale(16),
    color: colors.black,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  callIconContainer: {
    marginLeft: moderateScale(12),
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    paddingBottom: moderateScaleVertical(20),
  },
  textInputStyle: {
    color: colors.black,
    fontFamily: fontFamily.regular,
    fontSize: textScale(16),
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    borderRadius: moderateScale(8),
    borderWidth: 1,
    borderColor: colors.grey,
    minHeight: moderateScale(40),
    marginBottom: moderateScaleVertical(10),
  },
  inputToolbar: {
    backgroundColor: colors.lightBackground,
    borderWidth: 1,
    borderColor: colors.grey,
    borderTopWidth: 0,
    paddingVertical: moderateScaleVertical(8),
    paddingHorizontal: moderateScale(16),
  },
});

export default Message;
