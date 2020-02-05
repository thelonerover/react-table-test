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

export const dataLoaded = (state = false, action) => {
  if (action.type === actionTypes.dataLoaded) {
    return action.loaded;
  }

  return state;
}

export const setData = (state = [], action) => {
  if (action.type === actionTypes.setData) {
    return [...state, ...action.data];
  }

  return state;
}

