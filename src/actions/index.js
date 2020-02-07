export const actionTypes = {
    dataFetch: "DATA_FETCH",
    dataIsLoading: "DATA_IS_LOADING",
    dataLoadingFailed: "DATA_LOADING_FAILED",
    dataLoaded: "DATA_LOADED",
    setDataCache: "SET_DATA_CACHE",
    setVisibleData: "SET_VISIBLE_DATA",
    setPage: "SET_PAGE",
    setDataPerPage: "SET_DATA_PER_PAGE",
    sortDescend: "SORT_DESCEND",
    sortAscend: "SORT_ASCEND",
    setSortedField: "SET_SORTED_FIELD",
    getDataItem: "SELECT_DATA_ITEM",
    filterData: "FILTER_DATA",
    addDataItem: "ADD_DATA_ITEM"
};

export const dataFetch = (url) => {
    return (dispatch) => {
        dispatch(dataIsLoading(true));

        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            
            dispatch(dataIsLoading(false));
            dispatch(dataLoaded());

            return response;
        })
        .then(response => (response.json()))
        .then(data => {
            dispatch(setDataCache(data));
            dispatch(setVisibleData(data));
        })
        .catch(() => {dispatch(dataLoadingFailed())});
    }
};

export const dataIsLoading = bool => ({
    type: actionTypes.dataIsLoading,
    loading: bool
});

export const dataLoadingFailed = () => ({
    type: actionTypes.dataLoadingFailed,
    hasErrored: true
});

export const dataLoaded = () => ({
    type: actionTypes.dataLoaded,
    loaded: true
});

export const setVisibleData = data => ({
    type: actionTypes.setVisibleData,
    data
});

export const setDataCache = data => ({
    type: actionTypes.setDataCache,
    data
});

export const setPage = page => ({
    type: actionTypes.setPage,
    page
});

export const setDataPerPage = number => ({
    type: actionTypes.setDataPerPage,
    number
});

export const sortDescend = field => {
    return {
        type: actionTypes.sortDescend,
        field
    }
};

export const sortAscend = field => {
    return {
        type: actionTypes.sortAscend,
        field
    }
};

export const setSortedField = field => {
    return {
        type: actionTypes.setSortedField,
        field
    }
};

export const getDataItem = dataItem => {
    return {
        type: actionTypes.getDataItem,
        dataItem
    }
};

export const filterData = (data, filter) => {
    return {
        type: actionTypes.filterData,
        filter,
        data
    }
};

export const addDataItem = item => {
    return {
        type: actionTypes.addDataItem,
        item
    }
};