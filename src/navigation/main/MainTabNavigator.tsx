import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HomeScreen, TimelineScreen} from '../../screens';
import Entypo from 'react-native-vector-icons/Entypo';
import Material from 'react-native-vector-icons/MaterialIcons';
import {hp} from '../../helpers/layout';
import {Routes} from '../../constants/routes';
import {BottomSheet} from '../../components';
import {useSelector} from 'react-redux';
import {selectShowMileageForm} from '../../redux/mileage/mileage.selectors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MileageForm} from '../../containers';

const MainTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const showMileageForm = useSelector(selectShowMileageForm);
  return (
    <>
      <Tab.Navigator
        screenOptions={{
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
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  color: focused ? 'white' : '#9e9e9e',
                  fontSize: hp(1.2),
                }}>
                Home
              </Text>
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
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  color: focused ? 'white' : '#9e9e9e',
                  fontSize: hp(1.2),
                }}>
                Timeline
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
      <BottomSheet visible={showMileageForm}>
        <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
          <MileageForm />
        </SafeAreaView>
      </BottomSheet>
    </>
  );
};

export default MainTabNavigator;

const styles = StyleSheet.create({});
