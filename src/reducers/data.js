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

export const data = (state = [], action) => {
  
  if (action.type === actionTypes.setData) {
    return [...state, ...action.data];
  }

  if (action.type === actionTypes.sortAscend) {
    if (!isNaN(+state[0][action.field])) {
      return [...state.sort((a, b) => (
        a[action.field]- b[action.field]
      ))]
    }

    return [...state.sort((a, b) => (
      a[action.field].localeCompare(b[action.field])
    ))];
  }
  
  if (action.type === actionTypes.sortDescend) {
    if (!isNaN(+state[0][action.field])) {
      return [...state.sort((a, b) => (
        b[action.field]- a[action.field]
      ))]
    }

    return [...state.sort((a, b) => (
      b[action.field].localeCompare(a[action.field])
    ))];
  }

  return state;
}
