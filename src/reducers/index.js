import { combineReducers } from 'redux';
import {
    data as dataCache,
    dataIsLoading,
    dataLoaded,
    dataLoadingFailed,
    selectedDataItem,
    visibleData
} from './data';
import { 
    currentPage, 
    setDataPerPage as dataPerPage
} from "./tableData";

import { 
    sortedField
} from "./sortedField";

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