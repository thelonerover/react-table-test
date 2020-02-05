export const actionTypes = {
    dataFetch: "DATA_FETCH",
    dataIsLoading: "DATA_IS_LOADING",
    dataLoadingFailed: "DATA_LOADING_FAILED",
    dataLoadingSuccess: "DATA_LOADING_SUCCESS",
    sortDescending: "SORT_DESCENDING",
    sortAscending: "SORT_ASCENDING"
}

export const dataFetch = (url) => {
    return (dispatch) => {
        dispatch(dataIsLoading(true));

        fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(dataIsLoading(false));

            return response;
        })
        .then((response) => response.json())
        .then((items) => dispatch(dataLoadingSuccess(items)))
        .catch(() => dispatch(dataLoadingFailed()));
    }
}

export const dataIsLoading = (bool) => {
    return {
        type: actionTypes.dataLoading,
        loading: bool
    }
}

export const dataLoadingFailed = () => {
    return  {
        type: actionTypes.dataLoadingFailed,
        hasErrored: true
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