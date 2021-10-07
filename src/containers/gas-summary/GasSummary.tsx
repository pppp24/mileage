import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors} from '../../../typings/colors';
import {Labels} from '../../../typings/gas';
import {Icons} from '../../../typings/icons';
import {Spacer, Summary} from '../../components';
import {hp} from '../../helpers/layout';
import {
  selectAverageFuelConsumption,
  selectLastEntry,
  selectLastFuelConsumption,
  selectLastFuelPrice,
} from '../../redux/mileage/mileage.selectors';
import moment from 'moment';

const GasSummary = () => {
  const averageFuelConsumption = useSelector(selectAverageFuelConsumption);
  const lastFuelPrice = useSelector(selectLastFuelPrice);
  const lastFuelConsumption = useSelector(selectLastFuelConsumption);
  const lastEntry = useSelector(selectLastEntry);
  return (
    <Summary>
      <Spacer top />
      <Summary.Row
        icon={{
          icon: Icons.Feather,
          name: 'droplet',
          color: Colors.BLUE_500,
          size: hp(2.3),
        }}
        label={Labels.AverageFuelConsumption}
        text={`${averageFuelConsumption} mi/l`}
      />
      <Spacer top />
      <Summary.Row
        icon={{
          icon: Icons.MaterialCommunityIcons,
          name: 'chart-line-variant',
          color: 'green',
          size: hp(2.3),
        }}
        label={Labels.LastFuelConsumption}
        text={`${lastFuelConsumption} mi/l`}
      />
      <Spacer top />
      <Summary.Row
        icon={{
          icon: Icons.MaterialCommunityIcons,
          name: 'chart-line-variant',
          color: 'red',
          size: hp(2.3),
        }}
        label={Labels.LastFuelPrice}
        text={`$${lastFuelPrice}`}
      />
      <Spacer top />
      <Summary.Row
        label={`${moment(lastEntry.createdAt).format('YYYY-MM-DD')} / ${moment(
          lastEntry.createdAt,
        ).fromNow()} `}
      />
      <Spacer top />
    </Summary>
  );
};

export default GasSummary;

const styles = StyleSheet.create({});
