import {StyleSheet} from 'react-native';
import {colors} from '../../constants/theme';

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
    fontSize: 20,
    color: 'white',
  },
  popupButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  popupButtonText: {
    fontSize: 18,
    color: colors.blue,
  },
});

export default styles;
