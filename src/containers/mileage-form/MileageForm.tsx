import React from 'react';
import {Alert, Keyboard, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../constants/colors';
import {Icons} from '../../constants/icons';
import {HorizontalSpacing, VerticalSpacing} from '../../constants/spacing';
import {Input, Spacer} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import Icon from '../../components/icon/Icon';
import {hp, wp} from '../../helpers/layout';
import {
  addNewMileageEntry,
  toggleShowMileageForm,
} from '../../redux/mileage/mileage.actions';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {FormContext} from '../../context/FormContext';
import {selectLastEntry} from '../../redux/mileage/mileage.selectors';
import {FormContextType} from '../../../typings/context';

const MileageForm = () => {
  const {miles, setMiles, gas, setGas, price, setPrice, date, time, totalCost} =
    React.useContext(FormContext) as FormContextType;
  const lastEntry = useSelector(selectLastEntry);

  return (
    <>
      <MileageFormHeader />
      <TouchableWithoutFeedback
        style={{flex: 1, alignItems: 'center'}}
        onPress={() => Keyboard.dismiss()}>
        <>
          <Spacer vertical marginVertical={VerticalSpacing.FIVE} />
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
                  value={miles.toString()}
                  onChangeText={setMiles}
                  keyboardType="numeric"
                  maxLength={9}
                />
              </Input>
              <Spacer top />
              <Text
                style={{
                  color: Colors.BLUE_50,
                  marginLeft: HorizontalSpacing.FIVE,
                }}>
                {`Last value : ${lastEntry.miles} mi`}
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
                    ? ''
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
        </>
      </TouchableWithoutFeedback>
    </>
  );
};

export default MileageForm;

const MileageFormHeader = () => {
  const {miles, setMiles, gas, setGas, price, setPrice, timestamp} =
    React.useContext(FormContext) as FormContextType;
  const dispatch = useDispatch();
  const lastEntry = useSelector(selectLastEntry);
  const handleSubmit = () => {
    if (
      miles >= lastEntry.miles &&
      parseInt(gas) >= 0 &&
      parseInt(price) >= 0
    ) {
      dispatch(
        addNewMileageEntry({
          id: timestamp,
          miles: parseInt(miles),
          gas: parseFloat(gas),
          price: parseFloat(price),
          createdAt: timestamp,
        }),
      );
      dispatch(toggleShowMileageForm());
      resetInputs();
    } else {
      Alert.alert('One or more fields contain incorrect values !');
    }
  };

  const resetInputs = () => {
    setMiles('');
    setGas('');
    setPrice('');
  };
  return (
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
      <Text style={{fontSize: hp(2.5), color: Colors.BLUE_50}}>Refueling</Text>
      <TouchableOpacity onPress={handleSubmit}>
        <Icon
          icon={Icons.MaterialCommunityIcons}
          name="check"
          color={Colors.BLUE_50}
        />
      </TouchableOpacity>
    </View>
  );
};
