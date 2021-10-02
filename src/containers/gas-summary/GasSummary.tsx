import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../typings/colors';
import {Labels} from '../../../typings/gas';
import {Icons} from '../../../typings/icons';
import {Spacer, Summary} from '../../components';
import {hp} from '../../helpers/layout';

const GasSummary = () => {
  return (
    <Summary>
      <Summary.Row
        icon={{
          icon: Icons.Feather,
          name: 'droplet',
          color: Colors.BLUE_500,
          size: hp(2.3),
        }}
        label={Labels.AverageFuelConsumption}
        text={`${6.458} mi/l`}
      />
      <Summary.Row
        icon={{
          icon: Icons.MaterialCommunityIcons,
          name: 'chart-line-variant',
          color: 'green',
          size: hp(2.3),
        }}
        label={Labels.LastFuelConsumption}
        text={`${6.458} mi/l`}
      />
      <Summary.Row
        icon={{
          icon: Icons.MaterialCommunityIcons,
          name: 'chart-line-variant',
          color: 'red',
          size: hp(2.3),
        }}
        label={Labels.LastFuelPrice}
        text={`${6.458} mi/l`}
      />
      <Summary.Row label={'2021-09-24 / 7 days ago'} />
      <Spacer top />
    </Summary>
  );
};

export default GasSummary;

const styles = StyleSheet.create({});
