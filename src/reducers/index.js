import { combineReducers } from 'redux';
import {
    data,
    dataIsLoading,
    dataLoaded,
    dataLoadingFailed
} from './data';
import { 
    currentPage, 
    setDataPerPage as dataPerPage
} from "./tableData";

import { 
    sortedField
} from "./sortedField";

export default combineReducers({
    data,
    dataIsLoading,
    dataLoaded,
    dataLoadingFailed,
    currentPage,
    dataPerPage,
    sortedField
})