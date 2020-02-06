import { combineReducers } from 'redux';
import {
    setData as data,
    dataIsLoading,
    dataLoaded,
    dataLoadingFailed
} from './data';
import { 
    currentPage, 
    setDataPerPage as dataPerPage
} from "./tableData";

export default combineReducers({
    data,
    dataIsLoading,
    dataLoaded,
    dataLoadingFailed,
    currentPage,
    dataPerPage
})