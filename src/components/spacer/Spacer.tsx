import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {HorizontalSpacing, VerticalSpacing} from '../../../typings/spacing';

interface SpacerProps {
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  vertical?: boolean;
  horizontal?: boolean;
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
}

const Spacer: FC<SpacerProps> = ({
  marginVertical = VerticalSpacing.ONE,
  marginHorizontal = HorizontalSpacing.ONE,
  marginTop = VerticalSpacing.ONE,
  marginBottom = VerticalSpacing.ONE,
  marginLeft = HorizontalSpacing.ONE,
  marginRight = HorizontalSpacing.ONE,
  vertical = false,
  horizontal = false,
  top = false,
  bottom = false,
  left = false,
  right = false,
}) => {
  return (
    <View
      style={[
        vertical && {marginVertical},
        horizontal && {marginHorizontal},
        top && {marginTop},
        bottom && {marginBottom},
        left && {marginLeft},
        right && {marginRight},
      ]}
    />
  );
};

const styles = StyleSheet.create({});

export default Spacer;
