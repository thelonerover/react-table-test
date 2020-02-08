import { combineReducers } from 'redux';
import {
    data as dataCache,
    dataIsLoading,
    dataLoaded,
    dataLoadingFailed,
    selectedDataItem,
    visibleData,
    currentPage, 
    setDataPerPage as dataPerPage,
    sortedField
} from './data';

export default combineReducers({
    dataCache,
    dataIsLoading,
    dataLoaded,
    dataLoadingFailed,
    currentPage,
    dataPerPage,
    sortedField,
    selectedDataItem,
    visibleData
})