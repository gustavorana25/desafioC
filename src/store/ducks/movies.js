import { createActions, createReducer } from "reduxsauce";
import { searchMoviesInAPI, discoverMoviesInAPI, movieDetailInAPI } from '../../api/tmdb';

export const { Types, Creators } = createActions({
    movieIsFetching: ['movieIsFetching'],
    movieSuccess: ['movies'],
    movieDetailSuccess: ['movie'],
    movieFailure: ['error'],
    movieChangePage: ['page']
});

const INITIAL_STATE = {
    all:{}  
};

const movieIsFetching = (state = INITIAL_STATE, action) => ({
  ...state,
  movieIsFetching: action.movieIsFetching
});

const movieSuccess = (state = INITIAL_STATE, action) => ({  
    ...state,
    movies: action.movies,
    page: 0,
});

const movieDetailSuccess = (state = INITIAL_STATE, action) =>{
    let list = {...state.all};
    list[action.movie.id] = action.movie;
    return ({  
        ...state,
        all: list
    });
}

const movieFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  error: action.error
});

const movieChangePage= (state = INITIAL_STATE, action) => ({
  ...state,
  page: action.page
});

export default createReducer(INITIAL_STATE, {
    [Types.MOVIE_IS_FETCHING]: movieIsFetching,
    [Types.MOVIE_SUCCESS]: movieSuccess,
    [Types.MOVIE_DETAIL_SUCCESS]: movieDetailSuccess,
    [Types.MOVIE_FAILURE]: movieFailure,
    [Types.MOVIE_CHANGE_PAGE]: movieChangePage,
});

export const searchRequest = (inputSearch) => (dispatch, getState) => {
    if (getState().movies.movieIsFetching)
        return false;

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
    if (getState().movies.movieIsFetching)
        return false;

    dispatch(Creators.movieIsFetching(true));
    discoverMoviesInAPI()
        .then(result => {
            dispatch(Creators.movieSuccess(result));
            dispatch(Creators.movieIsFetching(false));
        }, error => {
            dispatch(Creators.movieFailure(error.message || 'Something went wrong.'));
        });
}

export const movieDetailRequest = (id) => (dispatch, getState) => {
    if (getState().movies.movieIsFetching)
        return false;

    dispatch(Creators.movieIsFetching(true));
    movieDetailInAPI(id)
        .then(result => {
            dispatch(Creators.movieDetailSuccess(result));
            dispatch(Creators.movieIsFetching(false));
        }, error => {
            dispatch(Creators.movieFailure(error.message || 'Something went wrong.'));
        });
}