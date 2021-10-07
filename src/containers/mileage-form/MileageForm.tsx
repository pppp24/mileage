import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../typings/colors';
import {Icons} from '../../../typings/icons';
import {HorizontalSpacing} from '../../../typings/spacing';
import {Input, Spacer} from '../../components';

const MileageForm = () => {
  const [miles, setMiles] = React.useState(0);
  const [gas, setGas] = React.useState(12);
  const [price, setPrice] = React.useState(1.5);
  const [date, setDate] = React.useState(Date.now());
  const [time, setTime] = React.useState('');

  const totalCost = (gas * price).toString();

  return (
    <View>
      <View>
        <Input>
          <Input.Icon
            icon={Icons.SimpleLineIcons}
            name="speedometer"
            color={Colors.BLUE_500}
          />
          <Input.TextInput
            placeholder="Odometer (mi)"
            value={miles}
            onChangeText={setMiles}
            keyboardType="numeric"
            maxLength={9}
          />
        </Input>
        <Spacer top />
        <Text
          style={{color: Colors.BLUE_50, marginLeft: HorizontalSpacing.FIVE}}>
          Last value : 66783 mi
        </Text>
      </View>
      <Spacer vertical />
      <Input>
        <Input.Icon
          icon={Icons.MaterialCommunityIcons}
          name="propane-tank"
          color={Colors.BLUE_500}
        />
        <Input.TextInput
          placeholder="Gas (l)"
          value={gas.toString()}
          onChangeText={setGas}
          keyboardType="numeric"
          maxLength={5}
        />
      </Input>
      <Spacer vertical />
      <Input>
        <Input.Icon
          icon={Icons.MaterialCommunityIcons}
          name="cash"
          color={Colors.BLUE_500}
        />
        <Input.TextInput
          placeholder="Price/L"
          value={price.toString()}
          onChangeText={setPrice}
          keyboardType="numeric"
          maxLength={6}
        />
        <Spacer left />
        <Input.TextInput
          placeholder="Total cost"
          value={
            Number.isNaN(parseFloat(totalCost))
              ? 'Invalid value'
              : parseFloat(totalCost).toFixed(2)
          }
          editable={false}
        />
      </Input>
      <Spacer vertical />
      <Input>
        <Input.Icon
          icon={Icons.MaterialCommunityIcons}
          name="calendar-blank"
          color={Colors.BLUE_500}
        />
        <Input.TextInput
          placeholder="Date"
          value={date.toString()}
          editable={false}
          selectTextOnFocus={false}
        />
        <Spacer left />
        <Input.TextInput
          placeholder="Time"
          value={time}
          editable={false}
          selectTextOnFocus={false}
        />
      </Input>
    </View>
  );
};

export default MileageForm;

const styles = StyleSheet.create({});
