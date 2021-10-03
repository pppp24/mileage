import {createReducer} from 'typesafe-actions';
import {MileageActionTypes} from './mileage.types';

export interface MileageState {
  showMileageForm: boolean;
}

export const initialState: MileageState = {
  showMileageForm: false,
};

const mileageReducer = createReducer<MileageState>(initialState).handleType(
  MileageActionTypes.SHOW_MILEAGE_FORM,
  state => ({
    ...state,
    showMileageForm: !state.showMileageForm,
  }),
);

export default mileageReducer;
