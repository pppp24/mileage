import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../typings/colors';
import {Labels} from '../../../typings/costs';
import {Icons} from '../../../typings/icons';
import {Spacer, Summary} from '../../components';
import {hp} from '../../helpers/layout';

const LastEntries = () => {
  return (
    <Summary>
      <LastEntriesSection title="SEPTEMBER 2021" />
      <LastEntriesSection title="JULY 2021" />
    </Summary>
  );
};

export default LastEntries;

const styles = StyleSheet.create({});

const LastEntriesSection = ({
  title,
  petrolAmount = 0,
  otherCostsAmount = 0,
}) => {
  return (
    <>
      <Spacer top />
      <Summary.Title title={title} />
      <Spacer top />
      <Summary.Row
        icon={{
          icon: Icons.MaterialCommunityIcons,
          name: 'gas-station',
          color: Colors.BLUE_500,
          size: hp(2.3),
        }}
        label={Labels.Gas}
        text={`$ ${petrolAmount}`}
      />
      <Spacer top />
    </>
  );
};
