import {combineReducers} from "redux";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});

export default rootReducer;

function booksReducer(state = [], action){
  let idx;
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book];
    case 
  }
}