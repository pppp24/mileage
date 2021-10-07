import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FormContext = React.createContext(undefined);

const FormProvider = ({children}) => {
  const [miles, setMiles] = React.useState(0);
  const [gas, setGas] = React.useState(12);
  const [price, setPrice] = React.useState(1.5);
  const [timestamp] = React.useState(Date.now());
  const totalCost = (gas * price).toString();
  const date = moment(timestamp).format('YYYY-MM-DD');
  const time = moment(timestamp).format('LT');

  return (
    <FormContext.Provider
      value={{
        miles,
        setMiles,
        gas,
        setGas,
        price,
        setPrice,
        timestamp,
        totalCost,
        date,
        time,
      }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
