import { Dimensions, PixelRatio } from "react-native";

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');
export const normalizeWidth = (size) =>{
  const newSize = size/SCREEN_WIDTH * 400;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
export const normalizeHeight = (size) =>{
  const newSize = size/SCREEN_HEIGHT * 600;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
