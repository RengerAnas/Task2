import React from 'react';
import {
  RootStackParamsList,
  ScreenTypes,
} from '../Models/Navigation/Navigation.models';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import UserDetail from '../Screens/UserDetail/UserDetail';

type Props = {};

const Stack = createStackNavigator<RootStackParamsList>();

const StackNavigator = (props: Props) => {
  //Stack Screens
  const Screens: ScreenTypes = [
    {
      name: 'Drawer',
      title: 'Home',
      Component: DrawerNavigator,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'UserDetail',
      title: 'User Detail',
      Component: UserDetail,
      options: {
        title: 'User Detail',
        headerBackTitle: 'Home',
      },
    },
  ];

  return (
    <Stack.Navigator
      initialRouteName="Drawer"
      screenOptions={({navigation}) => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTitleAlign: 'center',
      })}>
      {Screens.map(screen => {
        return (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.Component}
            options={({navigation}) => {
              return {
                ...screen.options,
              };
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNavigator;
