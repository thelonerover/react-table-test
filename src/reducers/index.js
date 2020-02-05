import { combineReducers } from 'redux';
import {
    dataIsLoading,
    dataLoadingFailed,
    dataLoadingSuccess
} from './data';

export default combineReducers({
    dataIsLoading,
    dataLoadingFailed,
    dataLoadingSuccess
})