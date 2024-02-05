import {LogBox, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigator from './Routes/RootNavigator';
import {Provider} from 'react-redux';
import {store} from './Redux/store';

type Props = {};

const App = (props: Props) => {
  LogBox.ignoreAllLogs();
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
