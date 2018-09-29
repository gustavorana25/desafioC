import { createActions, createReducer } from "reduxsauce";
import { genreMoviesInAPI } from '../../api/tmdb';

export const { Types, Creators } = createActions({
    genreIsFetching: ['genreIsFetching'],
    genreSuccess: ['genres'],
    genreFailure: ['error']
});

const INITIAL_STATE = {};

const genreIsFetching = (state = INITIAL_STATE, action) => ({
    ...state,
    genreIsFetching: action.genreIsFetching
});

const genreSuccess = (state = INITIAL_STATE, action) => {
    let all = {};
    action.genres.map(genre => all[genre.id] = genre.name);
    return({
        ...state,
        genres: all
    });
}

const genreFailure = (state = INITIAL_STATE, action) => ({
    ...state,
    error: action.error
});

export default createReducer(INITIAL_STATE, {
    [Types.GENRE_IS_FETCHING]: genreIsFetching,
    [Types.GENRE_SUCCESS]: genreSuccess,
    [Types.GENRE_FAILURE]: genreFailure,
});


export const genresRequest = () => (dispatch, getState) => {
    if (getState().genre.genreIsFetching)
        return false;

    dispatch(Creators.genreIsFetching(true));

    genreMoviesInAPI()
        .then(result => {
            dispatch(Creators.genreSuccess(result.genres));
        }, error => {
            dispatch(Creators.genreFailure(error.message || 'Something went wrong.'));
        });
}