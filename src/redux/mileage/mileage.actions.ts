import {createAction} from 'typesafe-actions';
import {MileageActionTypes} from './mileage.types';

interface NewMileageEntryPayload {
  data: {
    id: number;
    miles: string;
    gas: string;
    price: string;
    createdAt: number;
  };
}

const toggleShowMileageForm = createAction(
  MileageActionTypes.SHOW_MILEAGE_FORM,
)();

const addNewMileageEntry = createAction(
  MileageActionTypes.ADD_MILEAGE_ENTRY,
)<NewMileageEntryPayload>();

export {toggleShowMileageForm, addNewMileageEntry};
