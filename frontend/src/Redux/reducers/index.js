import { combineReducers } from 'redux';
import doctorsSlice from './doctorsSlice';
import citiesSlice from './citiesSlice';
import basicSlice from './basicSlice';

export default combineReducers({
    basic: basicSlice,
    doctor: doctorsSlice,
    city: citiesSlice,
});