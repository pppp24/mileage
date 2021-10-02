import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Routes} from '../../../typings/routes';
import {HomeScreen, TimelineScreen} from '../../screens';
import Entypo from 'react-native-vector-icons/Entypo';
import Material from 'react-native-vector-icons/MaterialIcons';
import {hp, wp} from '../../helpers/layout';
import Icon from '../../components/icon/Icon';

const MainTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
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
  );
};

export default MainTabNavigator;

const styles = StyleSheet.create({});
