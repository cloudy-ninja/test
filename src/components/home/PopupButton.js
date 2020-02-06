import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const PopupButton = props => {
  const {buttonText} = props;

  return (
    <TouchableOpacity style={styles.popupButton} {...props}>
      <Text style={styles.popupButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default PopupButton;
