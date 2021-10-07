import moment from 'moment';
import React from 'react';

export const FormContext = React.createContext(undefined);

const FormProvider = ({children}) => {
  const [miles, setMiles] = React.useState('');
  const [gas, setGas] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [timestamp] = React.useState(Date.now());
  const totalCost = (parseInt(gas) * parseInt(price)).toString();
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
