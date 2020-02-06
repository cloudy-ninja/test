import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

const ViewImage = props => {
  const {source} = props;

  return (
    <View style={styles.imageWrapper}>
      <Image source={source} style={styles.imageStyle} />
    </View>
  );
};

export default ViewImage;
