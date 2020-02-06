import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../constants/theme';

const styles = StyleSheet.create({
  imageWrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  selectButton: {
    position: 'absolute',
    bottom: 50,
  },
  selectButtonText: {
    fontSize: sizes.h2,
    color: 'white',
  },
  popupButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  popupButtonText: {
    fontSize: sizes.h3,
    color: colors.skyBlue,
  },
});

export default styles;
