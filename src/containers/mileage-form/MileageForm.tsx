import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../typings/colors';
import {Icons} from '../../../typings/icons';
import {Input, Spacer} from '../../components';

const MileageForm = () => {
  const [miles, setMiles] = React.useState('');
  const [gas, setGas] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [totalCost, setTotalCost] = React.useState('');
  const [date, setDate] = React.useState(Date.now());
  const [time, setTime] = React.useState('');

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
          />
        </Input>
        <Spacer top />
        <Text>Last value</Text>
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
          value={gas}
          onChangeText={setGas}
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
          value={price}
          onChangeText={setPrice}
        />
        <Spacer left />
        <Input.TextInput
          placeholder="Total cost"
          value={totalCost}
          onChangeText={setTotalCost}
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
