import moment from 'moment';
import React from 'react';
import {FormContextType} from '../../typings/context';

export const FormContext = React.createContext<FormContextType | undefined>(
  undefined,
);

const FormProvider = ({children}) => {
  const [miles, setMiles] = React.useState('');
  const [gas, setGas] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [timestamp] = React.useState(Date.now());
  console.log({price: parseInt(price), gas: parseInt(gas)});
  const totalCost = (parseFloat(gas) * parseFloat(price)).toFixed(2).toString();
  console.log({totalCost});
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
