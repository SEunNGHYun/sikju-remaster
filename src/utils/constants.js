import { Dimensions, PixelRatio, Platform } from 'react-native';

export const { width, height } = Dimensions.get('screen');

export const wp = (p) => PixelRatio.roundToNearestPixel((width * p) / 100);

export const isIOS = Platform.OS === 'ios';
