import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {HomeScreen, TimelineScreen} from '../../screens';
import Entypo from 'react-native-vector-icons/Entypo';
import Material from 'react-native-vector-icons/MaterialIcons';
import {hp, wp} from '../../helpers/layout';
import Icon from '../../components/icon/Icon';
import {Routes} from '../../../typings/routes';
import {BottomSheet} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {selectShowMileageForm} from '../../redux/mileage/mileage.selectors';
import {toggleShowMileageForm} from '../../redux/mileage/mileage.actions';

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
        <Button
          title={'CLOSE'}
          onPress={() => dispatch(toggleShowMileageForm())}
        />
      </BottomSheet>
    </>
  );
};

export default MainTabNavigator;

const styles = StyleSheet.create({});
