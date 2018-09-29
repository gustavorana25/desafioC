import { createActions, createReducer } from "reduxsauce";
import { search, discover } from '../../api/tmdb';

export const { Types, Creators } = createActions({
  addTodo: ["text"]
});

const INITIAL_STATE = [];
const add = (state = INITIAL_STATE, action) => [
  ...state,
  { id: Math.random(), text: action.text, complete: false }
];

export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: add
});