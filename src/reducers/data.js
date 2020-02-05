import { actionTypes } from "../actions";

export const dataIsLoading = (state = false, action) => {
  if (action.type === actionTypes.dataIsLoading) {
    return action.loading;
  }

  return state;
}

export const dataLoadingFailed = (state = false, action) => {
  if (action.type === actionTypes.dataLoadingFailed) {
    return action.hasErrored;
  }

  return state;
}

export const dataLoadingSuccess = (state, action) => {
  if (action.type === actionTypes.dataLoadingSuccess) {
    return [...state, action.data];
  }

  return state;
}