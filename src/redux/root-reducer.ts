import {combineReducers} from 'redux';
import mileageReducer from './mileage/mileage.reducer';

const rootReducer = combineReducers({mileage: mileageReducer});

export {rootReducer};
