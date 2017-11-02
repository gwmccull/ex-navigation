import {
  Platform,
  Dimensions,
  PixelRatio
} from 'react-native';

function isIphoneX() {
  return (
    Platform.OS === 'ios' && 
    Dimensions.get('window').height === 812 && 
    PixelRatio.get() === 3
  );
}

export default {
  isIphoneX
};