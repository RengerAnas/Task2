import {StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ScreenTypes} from '../Models/Navigation/Navigation.models';
import UserList from '../Screens/UserList/UserList';
import About from '../Screens/About/About';

type Props = {};
const Drawer = createDrawerNavigator();

const DrawerNavigator = (props: Props) => {
  // Drawer Screens
  const Screens: ScreenTypes = [
    {
      name: 'UserList',
      title: 'Home',
      Component: UserList,
    },
    {
      name: 'About',
      title: 'About',
      Component: About,
    },
  ];

  return (
    <Drawer.Navigator>
      {Screens.map(screen => {
        return (
          <Drawer.Screen
            key={screen.name}
            name={screen.name}
            component={screen.Component}
            options={({navigation}) => {
              return {
                title: screen.title,
              };
            }}
          />
        );
      })}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
