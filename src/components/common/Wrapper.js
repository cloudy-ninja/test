import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const Wrapper = props => {
  // flex size
  const flex = props.size || 0;
  // flex direction
  const flexDirection = props.row ? 'row' : 'column';
  // content alignment
  const justifyContent = props.primary || 'flex-start';
  const alignItems = props.secondary || 'flex-start';
  // margin
  const marginTop = props.marginTop || 0;
  const marginBottom = props.marginBottom || 0;
  const marginLeft = props.marginLeft || 0;
  const marginRight = props.marginRight || 0;
  // padding
  const paddingTop = props.paddingTop || 0;
  const paddingBottom = props.paddingBottom || 0;
  const paddingLeft = props.paddingLeft || 0;
  const paddingRight = props.paddingRight || 0;
  // width
  const width = props.width || 'auto';
  // height
  const height = props.height || 'auto';
  // background color
  const backgroundColor = props.backgroundColor || 'transparent';
  // border radius
  const borderRadius = props.borderRadius || 0;
  // overflow  visible
  const overflow = props.overflow || 'visible';

  return (
    <View
      style={[
        styles.wrapper,
        {
          width,
          height,
          flex,
          flexDirection,
          justifyContent,
          alignItems,
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
          paddingTop,
          paddingBottom,
          paddingLeft,
          paddingRight,
          borderRadius,
          backgroundColor,
          overflow,
        },
      ]}>
      {props.children}
    </View>
  );
};

export default Wrapper;
