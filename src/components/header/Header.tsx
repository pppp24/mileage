import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/colors';
import {Icons} from '../../constants/icons';
import {VerticalSpacing} from '../../constants/spacing';
import Icon from '../icon/Icon';
import Spacer from '../spacer/Spacer';

interface Props {
  icon?: {
    icon?: Icons;
    name?: string;
    color?: Colors;
    size?: number;
  };
  text?: string;
}

const Header: FC<Props> = ({icon, text}) => {
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
