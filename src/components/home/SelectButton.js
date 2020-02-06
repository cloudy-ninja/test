import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const SelectButton = props => {
  const {buttonTitle} = props;

  return (
    <TouchableOpacity style={styles.selectButton} {...props}>
      <Text style={styles.selectButtonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default SelectButton;
