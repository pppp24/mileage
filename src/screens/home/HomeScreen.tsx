import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../typings/colors';
import {Icons} from '../../../typings/icons';
import {Header, Ripple, Spacer} from '../../components';
import {CostsSummary, GasSummary} from '../../containers';
import {hp} from '../../helpers/layout';

const Home = () => {
  return (
    <View style={styles.container}>
      <Spacer vertical />
      <Header
        icon={{
          icon: Icons.MaterialCommunityIcons,
          name: 'gas-station',
          color: Colors.BLUE_500,
          size: hp(2.3),
        }}
        text="Gas"
      />
      <Spacer vertical />
      <GasSummary />
      <Spacer vertical />
      <Header
        icon={{
          icon: Icons.Foundation,
          name: 'dollar',
          color: Colors.BLUE_500,
          size: hp(2.3),
        }}
        text="Costs"
      />
      <Spacer vertical />
      <CostsSummary />
      <Spacer vertical />
      <Header
        icon={{
          icon: Icons.MaterialIcons,
          name: 'show-chart',
          color: Colors.BLUE_500,
          size: hp(2.3),
        }}
        text="Last Entries"
      />
      <View style={{position: 'absolute', bottom: 0, right: 0}}>
        <Ripple name="plus" color={'white'} size={30} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    flex: 1,
    alignItems: 'center',
  },
});
