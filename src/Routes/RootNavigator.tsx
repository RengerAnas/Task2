import {StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';

type Props = {};

const RootNavigator = (props: Props) => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor={'transparent'} />
      <StackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
