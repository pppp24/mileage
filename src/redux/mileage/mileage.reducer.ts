import {mileageEntries} from './../../../dummy-data/entries-two';
import {createReducer} from 'typesafe-actions';
import {MileageActionTypes} from './mileage.types';
import moment from 'moment';

export interface MileageState {
  showMileageForm: boolean;
  mileageEntries: any[];
}

export const initialState: MileageState = {
  showMileageForm: false,
  mileageEntries,
};

const mileageReducer = createReducer<MileageState>(initialState)
  .handleType(MileageActionTypes.SHOW_MILEAGE_FORM, state => ({
    ...state,
    showMileageForm: !state.showMileageForm,
  }))
  .handleType(MileageActionTypes.ADD_MILEAGE_ENTRY, (state, {payload}) => {
    const {createdAt, gas, id, miles, price} = payload;
    let prevEntries = state.mileageEntries;
    const month = moment(createdAt).format('MMMM');
    const year = moment(createdAt).format('YYYY');

    // Assuming incoming will always be sorted in ascending order
    // And that only entries for current timestamp can be added, and not dates in past or future
    let latestEntry = prevEntries[prevEntries.length - 1];
    if (latestEntry.date.month === month && latestEntry.date.year === year) {
      let amendedLatestEntry = {
        date: {
          ...latestEntry.date,
        },
        data: [
          ...latestEntry.data,
          {
            id,
            miles,
            gas,
            price,
            createdAt,
          },
        ],
      };

      return {
        ...state,
        mileageEntries: [
          ...prevEntries.slice(0, prevEntries.length - 1),
          amendedLatestEntry,
        ],
      };
    }

    let newEntry = {
      date: {
        month,
        year: parseInt(year),
      },
      data: [
        {
          id,
          miles,
          gas,
          price,
          createdAt,
        },
      ],
    };
    return {
      ...state,
      mileageEntries: [...prevEntries, newEntry],
    };
  });

export default mileageReducer;
