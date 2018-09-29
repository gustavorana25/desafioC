import { createActions, createReducer } from "reduxsauce";
import { searchMoviesInAPI, discoverMoviesInAPI } from '../../api/tmdb';

export const { Types, Creators } = createActions({
    movieIsFetching: ['movieIsFetching'],
    movieSuccess: ['movies'],
    movieFailure: ['error']
});

const INITIAL_STATE = {};
const movieIsFetching = (state = INITIAL_STATE, action) => ({
  ...state,
  movieIsFetching: action.movieIsFetching
});

const movieSuccess = (state = INITIAL_STATE, action) => ({  
    ...state,
  movies: action.movies
});

const movieFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  error: action.error
});

export default createReducer(INITIAL_STATE, {
    [Types.MOVIE_IS_FETCHING]: movieIsFetching,
    [Types.MOVIE_SUCCESS]: movieSuccess,
    [Types.MOVIE_FAILURE]: movieFailure,
});


export const searchRequest = (inputSearch) => (dispatch, getState) => {
    if (getState().movieIsFetching)
        Promise.resolve();

    dispatch(Creators.movieIsFetching(true));

    searchMoviesInAPI(inputSearch)
        .then(result => {
            dispatch(Creators.movieSuccess(result));
            dispatch(Creators.movieIsFetching(false));
        }, error => {
            dispatch(Creators.movieFailure(error.message || 'Something went wrong.'));
        });
}

export const discoverRequest = () => (dispatch, getState) => {
    if (getState().movieIsFetching)
        Promise.resolve();

    dispatch(Creators.movieIsFetching(true));
    discoverMoviesInAPI()
        .then(result => {
            dispatch(Creators.movieSuccess(result));
            dispatch(Creators.movieIsFetching(false));
        }, error => {
            dispatch(Creators.movieFailure(error.message || 'Something went wrong.'));
        });
}