import {Dimensions, Platform, PixelRatio} from 'react-native';

let {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

if (SCREEN_WIDTH > SCREEN_HEIGHT) {
  const h = SCREEN_HEIGHT;
  SCREEN_HEIGHT = SCREEN_WIDTH;
  SCREEN_WIDTH = h;
}

// Guideline sizes are based on standard ~5" screen mobile device
const scale = SCREEN_WIDTH / 430;

function actuatedNormalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

function moderateScale(size: number, factor = 0.7) {
  const newSize = size * scale;
  const newPixelRatioSize = Platform.OS === 'ios' ? newSize : newSize - 2;
  return size + (newPixelRatioSize - size) * factor;
}

export {actuatedNormalize, moderateScale};
