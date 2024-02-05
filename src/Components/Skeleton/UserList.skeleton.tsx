import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {height, moderateScale} from '../../Constants/Styles';

type Props = {};

const UserListSkeleton = (props: Props) => {
  return (
    <View>
      {new Array(10).fill('').map((item, index) => {
        return <View key={index} style={styles.container}></View>;
      })}
    </View>
  );
};

export default UserListSkeleton;

const styles = StyleSheet.create({
  container: {
    height: height * 0.1,
    margin: moderateScale(10),
    borderRadius: moderateScale(4),
    backgroundColor: '#e3e3e3',
  },
});
