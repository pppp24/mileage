import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  flex?: number;
}

const Expanded: FC<Props> = ({flex = 1}) => {
  return <View style={{flex}} />;
};

export default Expanded;

const styles = StyleSheet.create({});
