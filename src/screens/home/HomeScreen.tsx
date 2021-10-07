import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from '../../../typings/colors';
import {Icons} from '../../../typings/icons';
import {BottomSheet, Expanded, Header, Ripple, Spacer} from '../../components';
import {CostsSummary, GasSummary, LastEntries} from '../../containers';
import {hp} from '../../helpers/layout';
import {selectShowMileageForm} from '../../redux/mileage/mileage.selectors';
import {toggleShowMileageForm} from '../../redux/mileage/mileage.actions';
import {VerticalSpacing} from '../../../typings/spacing';

const Home = () => {
  const dispatch = useDispatch();
  return (
    // <View style={{flex: 1, position: 'relative'}}>
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        style={{flex: 1, backgroundColor: '#212121'}}>
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
        <Spacer vertical />
        <LastEntries />
        <Expanded />
      </ScrollView>
      <View style={{position: 'absolute', bottom: 0, right: 0}}>
        <Ripple
          name="plus"
          color={'white'}
          size={30}
          callback={() => dispatch(toggleShowMileageForm())}
        />
      </View>
      {/* </View> */}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
