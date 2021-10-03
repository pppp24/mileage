import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HomeScreen, TimelineScreen} from '../../screens';
import Entypo from 'react-native-vector-icons/Entypo';
import Material from 'react-native-vector-icons/MaterialIcons';
import {hp, wp} from '../../helpers/layout';
import Icon from '../../components/icon/Icon';
import {Routes} from '../../../typings/routes';
import {BottomSheet, Spacer} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {selectShowMileageForm} from '../../redux/mileage/mileage.selectors';
import {toggleShowMileageForm} from '../../redux/mileage/mileage.actions';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icons} from '../../../typings/icons';
import {HorizontalSpacing} from '../../../typings/spacing';
import {Colors} from '../../../typings/colors';

const MainTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const showMileageForm = useSelector(selectShowMileageForm);
  const dispatch = useDispatch();
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerBackground: () => (
            <View style={{flex: 1, backgroundColor: '#424242'}} />
          ),
          headerTitle: '',
          tabBarBackground: () => (
            <View style={{flex: 1, backgroundColor: '#424242'}} />
          ),
          tabBarStyle: {
            borderTopWidth: 0,
          },
        }}>
        <Tab.Screen
          name={Routes.HomeScreen}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Entypo
                name="home"
                size={hp(3.2)}
                color={focused ? 'white' : '#9e9e9e'}
              />
            ),
          }}
        />
        <Tab.Screen
          name={Routes.TimelineScreen}
          component={TimelineScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Material
                name="show-chart"
                size={hp(3.2)}
                color={focused ? 'white' : '#9e9e9e'}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <BottomSheet visible={showMileageForm}>
        <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',

              width: wp(100),
              paddingHorizontal: HorizontalSpacing.TWO,
            }}>
            <TouchableOpacity onPress={() => dispatch(toggleShowMileageForm())}>
              <Icon
                icon={Icons.MaterialCommunityIcons}
                name="close"
                color={Colors.BLUE_50}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon
                icon={Icons.MaterialCommunityIcons}
                name="check"
                color={Colors.BLUE_50}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </BottomSheet>
    </>
  );
};

export default MainTabNavigator;

const styles = StyleSheet.create({});
