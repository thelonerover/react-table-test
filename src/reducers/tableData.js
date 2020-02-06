import { actionTypes } from "../actions";

export const currentPage = (state = 1, action) => {
    if (action.type === actionTypes.setPage) {
        return action.page;
    }

    return state;
}
  