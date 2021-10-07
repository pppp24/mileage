import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors} from '../../../typings/colors';
import {Labels} from '../../../typings/costs';
import {Icons} from '../../../typings/icons';
import {Spacer, Summary} from '../../components';
import {hp} from '../../helpers/layout';
import {selectLastTwoMonths} from '../../redux/mileage/mileage.selectors';

const LastEntries = () => {
  const lastTwoMonths = useSelector(selectLastTwoMonths);
  return (
    <Summary>
      <LastEntriesSection
        title={`${lastTwoMonths[0].date.month.toUpperCase()} ${
          lastTwoMonths[0].date.year
        }`}
        petrolAmount={lastTwoMonths[0].data.reduce(
          (a, v) => (a += v.price * v.gas),
          0,
        )}
      />
      <LastEntriesSection
        title={`${lastTwoMonths[1].date.month.toUpperCase()} ${
          lastTwoMonths[1].date.year
        }`}
        petrolAmount={lastTwoMonths[1].data.reduce(
          (a, v) => (a += v.price * v.gas),
          0,
        )}
      />
    </Summary>
  );
};

export default LastEntries;

const styles = StyleSheet.create({});

const LastEntriesSection = ({title, petrolAmount = 0}) => {
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
