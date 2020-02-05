import { combineReducers } from 'redux';
import {
    setData as data,
    dataIsLoading,
    dataLoaded,
    dataLoadingFailed
} from './data';

export default combineReducers({
    data,
    dataIsLoading,
    dataLoaded,
    dataLoadingFailed
})