import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.newColumn, id: shortid() }] };
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.newCard, id: shortid() }] };
    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.searchString };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
