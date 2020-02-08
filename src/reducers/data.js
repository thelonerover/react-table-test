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
  switch(action.type) {
    case actionTypes.setDataCache:
      return [...action.data];

    default: 
      return state;
  }
}

export const visibleData = (state = [], action) => {
  if (action.type === actionTypes.setVisibleData) {
    return [...action.data];
  }

  switch(action.type) {
    case actionTypes.setVisibleData:
      return [...action.data];

    case actionTypes.filterData:
      if (action.filter !== "") {
        return [...action.data.filter(item => {
          //We need to filter data by these fields, right? Or look through all of the items' field? Or I should pass object with fields' names to filter by?
          //The last way can be more flexible but I'll leave it like this for now.
          if (
            item.id.toLowerCase().includes(action.filter.toLowerCase()) ||
            item.firstName.toLowerCase().includes(action.filter.toLowerCase()) ||
            item.lastName.toLowerCase().includes(action.filter.toLowerCase()) ||
            item.email.toLowerCase().includes(action.filter.toLowerCase()) ||
            item.phone.toLowerCase().includes(action.filter.toLowerCase())
          ) {
            return true;
          }

          return false;
        })];
      } else {
        return action.data;
      }

    case actionTypes.sortAscend: 
      if (!isNaN(+state[0][action.field])) {
        return [...state.sort((a, b) => (
          a[action.field]- b[action.field]
        ))]
      }

      return [...state.sort((a, b) => (
        a[action.field].localeCompare(b[action.field])
      ))];

    case actionTypes.sortDescend: 
      if (!isNaN(+state[0][action.field])) {
        return [...state.sort((a, b) => (
          b[action.field]- a[action.field]
        ))]
      }

      return [...state.sort((a, b) => (
        b[action.field].localeCompare(a[action.field])
      ))];

    default: 
      return state;
  }
}

export const selectedDataItem = (state = {}, action) => {
  if (action.type === actionTypes.getDataItem) {
    return action.dataItem;
  }

  return state;
}