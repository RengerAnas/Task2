import {RouteProp} from '@react-navigation/native';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import {userType} from '../Users/Users.models';

export type MainStackParamsList = {
  UserDetail: {item: userType};
  Drawer: undefined;
};

export type DrawerStackParamsList = {
  UserList: undefined;
  About: undefined;
};

export type RootStackParamsList = MainStackParamsList & DrawerStackParamsList;

export type ScreenTypes = {
  name: keyof RootStackParamsList;
  title: string;
  Component: React.FC<any>;
  options?: StackNavigationOptions;
}[];

export interface NavigationProps<T extends keyof RootStackParamsList> {
  navigation: StackNavigationProp<RootStackParamsList, T>;
  route: RouteProp<RootStackParamsList, T>;
}
