import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import MainTabNavigator from './src/navigation/main/MainTabNavigator';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './src/redux/store';
import FormProvider from './src/context/FormContext';

const App = () => {
  return (
    <Provider store={store}>
      <FormProvider>
        <NavigationContainer>
          <MainTabNavigator />
        </NavigationContainer>
      </FormProvider>
    </Provider>
  );
};

export default App;
