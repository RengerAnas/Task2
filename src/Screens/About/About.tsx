import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const About = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 25, color: 'black'}}>About page</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
