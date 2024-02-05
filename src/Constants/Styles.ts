import {Dimensions, Platform, StatusBar, StyleSheet} from 'react-native';

export const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function SQUARE(size: number) {
  return {
    width: size,
    height: size,
  };
}

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
export const moderateScaleVertical = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;
export const textScale = (percent: number) => {
  const screenHeight = Dimensions.get('window').height;
  //calculate absolute ratio for bigger screens 18.5:9 requiring smaller scaling
  const ratio =
    Dimensions.get('window').height / Dimensions.get('window').width;
  //Guideline sizes are based on standard ~5″ screen mobile device
  const deviceHeight = 375
    ? screenHeight * (ratio > 1.8 ? 0.126 : 0.15) //Set guideline depending on absolute ratio
    : Platform.OS === 'android'
    ? screenHeight - (StatusBar.currentHeight as any)
    : screenHeight;

  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
};
