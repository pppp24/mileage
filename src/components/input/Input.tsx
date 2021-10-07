import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Spacer} from '..';
import {Colors} from '../../../typings/colors';
import {HorizontalSpacing} from '../../../typings/spacing';
import {hp, wp} from '../../helpers/layout';
import Icon from '../icon/Icon';

const Input = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Input;

Input.Icon = ({...restProps}) => {
  return (
    <>
      <Icon {...restProps} size={wp(5)} />
      <Spacer horizontal />
    </>
  );
};

Input.TextInput = ({...restProps}) => {
  return (
    <View style={styles.input}>
      <Spacer vertical />
      <TextInput
        {...restProps}
        placeholderTextColor={Colors.GREY_500}
        style={[styles.text]}
      />
      <Spacer vertical />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: 'blue',
    width: wp(90),
  },
  input: {
    flexShrink: 1,
    borderColor: Colors.GREY_500,
    // backgroundColor: 'red',
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: HorizontalSpacing.ONE,
  },
  text: {
    color: Colors.BLUE_50,
  },
});
