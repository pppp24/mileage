import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors} from '../../../typings/colors';
import {Labels} from '../../../typings/costs';
import {Icons} from '../../../typings/icons';
import {Spacer, Summary} from '../../components';
import {hp} from '../../helpers/layout';
import {
  selectTotalFuelCostsForCurrentMonth,
  selectTotalFuelCostsForPreviousMonth,
} from '../../redux/mileage/mileage.selectors';

const CostsSummary = () => {
  const totalFuelCostsForCurrentMonth = useSelector(
    selectTotalFuelCostsForCurrentMonth,
  );
  const totalFuelCostsForPreviousMonth = useSelector(
    selectTotalFuelCostsForPreviousMonth,
  );
  return (
    <Summary>
      <CostsSummarySection
        title="THIS MONTH"
        petrolAmount={totalFuelCostsForCurrentMonth.toFixed(2)}
      />
      <CostsSummarySection
        title="PREVIOUS MONTH"
        petrolAmount={totalFuelCostsForPreviousMonth.toFixed(2)}
      />
    </Summary>
  );
};

export default CostsSummary;

const styles = StyleSheet.create({});

const CostsSummarySection = ({
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
      <Summary.Row
        icon={{
          icon: Icons.MaterialCommunityIcons,
          name: 'cash',
          color: Colors.BLUE_500,
          size: hp(2.3),
        }}
        label={Labels.OtherCosts}
        text={`$ ${otherCostsAmount}`}
      />
      <Spacer top />
    </>
  );
};
