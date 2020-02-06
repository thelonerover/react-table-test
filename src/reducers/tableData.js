import { actionTypes } from "../actions";

export const currentPage = (state = 1, action) => {
    if (action.type === actionTypes.setPage) {
        return action.page;
    }

    return state;
}

export const setDataPerPage = (state = 13, action) => {
    if (action.type === actionTypes.dataPerPage) {
        return action.dataPerPage;
    }

    return state;
}
  