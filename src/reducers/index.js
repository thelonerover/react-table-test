import { combineReducers } from 'redux';
import {
    setData as data,
    dataIsLoading,
    dataLoaded,
    dataLoadingFailed
} from './data';
import { currentPage } from "./tableData";

export default combineReducers({
    data,
    dataIsLoading,
    dataLoaded,
    dataLoadingFailed,
    currentPage
})