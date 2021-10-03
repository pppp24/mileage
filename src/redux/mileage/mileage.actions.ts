import {createAction} from 'typesafe-actions';
import {MileageActionTypes} from './mileage.types';

const toggleShowMileageForm = createAction(
  MileageActionTypes.SHOW_MILEAGE_FORM,
)();

export {toggleShowMileageForm};
