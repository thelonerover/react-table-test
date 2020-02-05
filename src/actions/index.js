export const actionTypes = {
    dataGet: "DATA_GET",
    dataLoading: "DATA_LOADING",
    dataLoadingFailed: "DATA_LOADING_FAILED",
    dataLoadingSuccess: "DATA_LOADING_SUCCESS",
    sortDescending: "SORT_DESCENDING",
    sortAscending: "SORT_ASCENDING"
}

export const dataGet = () => {
    return (dispatch, getState) => {
        return {
            type: actionTypes.dataGet
        }
    }
}

export const dataLoading = (bool) => {
    return {
        type: actionTypes.dataLoading,
        loading: bool
    }
}

export const dataLoadingFailed = (bool) => {
    return  {
        type: actionTypes.dataLoadingFailed,
        hasErrored: bool
    }
}

export const dataLoadingSuccess = (items) => {
    return {
        type: actionTypes.dataLoadingSuccess,
        items
    }
}

export const sortDescending = (field) => {
    return {
        type: actionTypes.sortDescending,
        field: field
    }
}

export const sortAscending = (field) => {
    return {
        type: actionTypes.sortAscending,
        field: field
    }
}