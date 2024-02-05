import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationProps} from '../../Models/Navigation/Navigation.models';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../Constants/Styles';
import {DetailComponent} from '../../Components/Cards/DetailComponent';
import Images from '../../Constants/Images';
import Colors from '../../Constants/Colors';

type Props = {};

const UserDetail = ({
  route: {
    params: {item},
  },
}: NavigationProps<'UserDetail'>) => {
  const details = [
    {detail: item.username, image: Images.user},
    {detail: item.email, image: Images.email},
    {detail: item.phone, image: Images.phone},
    {detail: item.address.city, image: Images.address},
    {detail: item.company.name, image: Images.company},
    {detail: item.website, image: Images.website},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headingTxt}>{item.name}</Text>
        <View style={styles.subHeadingWrapper}>
          <Text style={styles.subHeadingTxt}>User Details</Text>
        </View>

        <View style={{gap: 20}}>
          {details.map((detail, index) => (
            <DetailComponent key={detail.detail} {...detail} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    margin: moderateScale(16),
    padding: moderateScale(15),
    backgroundColor: Colors.primary,
    elevation: 5,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    borderRadius: moderateScale(10),
  },
  headingTxt: {
    fontSize: textScale(25),
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: moderateScaleVertical(10),
  },
  subHeadingWrapper: {
    borderBottomWidth: 1,
    marginBottom: moderateScaleVertical(15),
    borderBottomColor: '#e0e0e0',
    paddingBottom: moderateScaleVertical(5),
  },
  subHeadingTxt: {
    fontSize: textScale(20),
    fontWeight: 'bold',
    color: 'black',
  },
});
