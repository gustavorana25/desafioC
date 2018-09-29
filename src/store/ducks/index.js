import { combineReducers } from "redux";

import movies from "./movies";
import genre from "./genre";

export default combineReducers({
    movies,
    genre
});