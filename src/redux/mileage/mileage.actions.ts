import {createAction} from 'typesafe-actions';
import {MileageActionTypes} from './mileage.types';

interface NewMileageEntryPayload {
  id: number;
  miles: number;
  gas: number;
  price: number;
  createdAt: number;
}

const toggleShowMileageForm = createAction(
  MileageActionTypes.SHOW_MILEAGE_FORM,
)();

const addNewMileageEntry = createAction(
  MileageActionTypes.ADD_MILEAGE_ENTRY,
)<NewMileageEntryPayload>();

export {toggleShowMileageForm, addNewMileageEntry};
