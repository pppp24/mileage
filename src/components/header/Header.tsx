import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../typings/colors';
import {VerticalSpacing} from '../../../typings/spacing';
import Icon from '../icon/Icon';
import Spacer from '../spacer/Spacer';

const Header = ({icon, text}) => {
  return (
    <View style={styles.container}>
      <Spacer vertical marginVertical={VerticalSpacing.TWO} />
      <Spacer horizontal />
      <Icon {...icon} />
      <Spacer left />
      <Text style={styles.text}>{text}</Text>
      <Spacer horizontal />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GREY_800,
    borderRadius: 50,
  },
  text: {
    color: Colors.BLUE_50,
  },
});
