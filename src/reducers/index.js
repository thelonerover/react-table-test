import { combineReducers } from 'redux';
import {
    data,
    dataIsLoading,
    dataLoadingFailed,
    dataLoadingSucceed
} from './data';

export default combineReducers({
    data,
    dataIsLoading,
    dataLoadingFailed,
    dataLoadingSucceed
})