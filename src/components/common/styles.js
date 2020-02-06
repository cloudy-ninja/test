import {StyleSheet} from 'react-native';
import {colors} from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.lightGray,
    opacity: 0.5,
  },
});

export default styles;
