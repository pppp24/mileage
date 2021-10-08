import reducer, {initialState} from './mileage.reducer';
import {MileageActionTypes} from './mileage.types';

it('should set bottom sheet state to visible upon receiving @Mileage/ShowMileageForm action', () => {
  const state = initialState;

  const action = {
    type: '@Mileage/ShowMileageForm',
  };

  expect(reducer(state.showMileageForm, action)).toEqual({
    showMileageForm: true,
  });
});

it('should add a new month entry if there are no data entries for that month upon receiving a @Mileage/AddMileageEntry action', () => {
  const state = initialState;

  const action = {
    type: MileageActionTypes.ADD_MILEAGE_ENTRY,
    payload: {
      id: 999,
      miles: 69610,
      gas: 15,
      price: 1.52,
      createdAt: Date.now(),
    },
  };

  const numberOfMonthEntries = state.mileageEntries.length;
  const result = reducer(state, action);
  expect(result.mileageEntries.length).toEqual(numberOfMonthEntries + 1);
});

it('should update month entry if that month has existing fuel entries upon receiving a @Mileage/AddMileageEntry action', () => {
  const state = initialState;

  const action = {
    type: MileageActionTypes.ADD_MILEAGE_ENTRY,
    payload: {
      id: 999,
      miles: 69610,
      gas: 15,
      price: 1.52,
      createdAt: Date.now(),
    },
  };
  const actionTwo = {
    type: MileageActionTypes.ADD_MILEAGE_ENTRY,
    payload: {
      id: 1000,
      miles: 69810,
      gas: 20,
      price: 1.53,
      createdAt: Date.now() + 20,
    },
  };

  const resultOne = reducer(state, action);
  const resultTwo = reducer(resultOne, actionTwo);
  const lastMonthEntry =
    resultTwo.mileageEntries[resultTwo.mileageEntries.length - 1];
  expect(lastMonthEntry.data.length).toEqual(2);
});
