export const actionTypes = {
    dataFetch: "DATA_FETCH",
    dataIsLoading: "DATA_IS_LOADING",
    dataLoadingFailed: "DATA_LOADING_FAILED",
    dataLoaded: "DATA_LOADED",
    setData: "SET_DATA",
    sortDescending: "SORT_DESCENDING",
    sortAscending: "SORT_ASCENDING"
}

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
        .then(data => dispatch(setData(data)))
        .catch(() => dispatch(dataLoadingFailed()));
    }
}

export const dataIsLoading = bool => ({
    type: actionTypes.dataIsLoading,
    loading: bool
});

export const dataLoadingFailed = () => ({
    type: actionTypes.dataLoadingFailed,
    hasErrored: true
})

export const dataLoaded = () => ({
    type: actionTypes.dataLoaded,
    loaded: true
})

export const setData = data => ({
    type: actionTypes.setData,
    data
})

// export const sortDescending = (field) => {
//     return {
//         type: actionTypes.sortDescending,
//         field: field
//     }
// }

// export const sortAscending = (field) => {
//     return {
//         type: actionTypes.sortAscending,
//         field: field
//     }
// }