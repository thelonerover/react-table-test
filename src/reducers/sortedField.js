import { actionTypes } from "../actions";

export const sortedField = (state = null, action) => {
    if (action.type === actionTypes.setSortedField) {
        return action.field;
    }

    return state;
}