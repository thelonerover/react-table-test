export const actionTypes = {
    getData: "GET_DATA",
    sortDescending: "SORT_DESCENDING",
    sortAscending: "SORT_ASCENDING"
}

export const getData = () => {
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