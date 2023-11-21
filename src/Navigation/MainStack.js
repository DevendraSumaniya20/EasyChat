import React from 'react';

import * as Screens from '../screens';
import NavigationString from '../constants/NavigationString';
import TabRoutes from './TabRoutes';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={NavigationString.TAB_ROUTES} component={TabRoutes} />
      <Stack.Screen name={NavigationString.USERS} component={Screens.Users} />
    </>
  );
}
