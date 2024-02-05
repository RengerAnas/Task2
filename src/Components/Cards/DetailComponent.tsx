import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import {SQUARE, moderateScale, textScale} from '../../Constants/Styles';

export const DetailComponent = ({
  image,
  detail,
}: {
  image: ImageSourcePropType;
  detail: string;
}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
      <Image
        source={image}
        resizeMode="contain"
        style={SQUARE(moderateScale(15))}
      />
      <Text style={styles.detailTxt}>{detail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailTxt: {
    color: 'black',
    fontWeight: '500',
    fontSize: textScale(15),
  },
});
