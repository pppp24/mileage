import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Expanded, Spacer} from '..';
import {Colors} from '../../constants/colors';
import {wp} from '../../helpers/layout';
import Icon from '../icon/Icon';

const Summary = ({children, ...restProps}) => {
  return (
    <View style={styles.container} {...restProps}>
      {children}
    </View>
  );
};

export default Summary;

Summary.Title = ({title}) => {
  return (
    <View style={styles.row}>
      <Spacer left />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

Summary.Row = ({icon, text, label}) => {
  return (
    <View style={styles.row}>
      <Spacer left />
      <View style={[styles.row, {alignItems: 'center'}]}>
        {icon ? <Icon {...icon} /> : <Expanded />}
        <Spacer left />
        <Text style={styles.amount}>{text}</Text>
      </View>
      <Expanded />
      <Text style={styles.label}>{label}</Text>
      <Spacer right />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.GREY_800,
    width: wp(90),
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
  label: {
    color: Colors.GREY_500,
  },
  amount: {
    color: Colors.BLUE_50,
  },
  title: {
    color: Colors.GREY_500,
  },
});
