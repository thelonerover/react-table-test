import { actionTypes } from "../actions";

const initialState = {
  data: []
}

export default function data(state, action) {
  if (typeof state === "undefined") {
    return initialState;
  }

//   switch(action.type) {
//       case actionTypes.getData:
//           return [...state, ]
        
//       default: 
//         return state;
//   }

  return state;
}