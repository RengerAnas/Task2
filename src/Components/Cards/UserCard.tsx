import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {userType} from '../../Models/Users/Users.models';
import Animated, {FadeInDown} from 'react-native-reanimated';
import Images from '../../Constants/Images';
import {SQUARE, moderateScale, textScale} from '../../Constants/Styles';
import {DetailComponent} from './DetailComponent';
import Colors from '../../Constants/Colors';

type Props = {item: userType; index: number};

const UserCard = ({item, index}: Props) => {
  return (
    <Animated.View
      style={styles.container}
      entering={FadeInDown.delay(index * 150)}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <Image
          source={Images.user}
          resizeMode="contain"
          style={SQUARE(moderateScale(20))}
        />
        <Text style={styles.headingTxt}>{item.name}</Text>
      </View>

      <DetailComponent detail={item.email} image={Images.email} />
      <DetailComponent detail={item.phone} image={Images.phone} />
    </Animated.View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
    gap: moderateScale(10),
    margin: moderateScale(10),
    borderRadius: moderateScale(4),
    elevation: 4,
    shadowRadius: 3,
    shadowOpacity: 0.1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    backgroundColor: Colors.primary,
  },
  headingTxt: {
    color: 'black',
    fontWeight: '700',
    fontSize: textScale(20),
  },
});
