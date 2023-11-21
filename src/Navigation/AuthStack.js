import React from 'react';

import * as Screens from '../screens';
import NavigationString from '../constants/NavigationString';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={NavigationString.TERMS_CONDITION}
        component={Screens.TermsCondition}
      />
      <Stack.Screen
        name={NavigationString.PHONE_NUMBER}
        component={Screens.PhoneNumber}
      />
      <Stack.Screen
        name={NavigationString.EDIT_PROFILE}
        component={Screens.EditProfile}
      />
      <Stack.Screen
        name={NavigationString.OTP_VERIFICATION}
        component={Screens.OtpVerification}
      />
    </>
  );
}
