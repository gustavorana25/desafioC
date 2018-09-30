export const api = {
    request_url: 'https://api.themoviedb.org/',
    image_url: 'https://image.tmdb.org/t/p/',
    key: 'ab9784d6bd2d7cf6dbf8a2840a51a9bc'
}

export const searchMoviesInAPI = (search_input) =>{
    const url = api.request_url + '3/search/movie?language=pt-br&sort_by=popularity&include_video=1&api_key=' + api.key + '&query=' + search_input;
    return fetch(url).then(result => result.json());
}

export const discoverMoviesInAPI = () =>{
    const url = api.request_url + '3/discover/movie?language=pt-br&include_video=1&api_key=' + api.key + '&sort_by=popularity.desc';
    return fetch(url).then(result => result.json());
}

export const movieDetailInAPI = (id) =>{
    const url = api.request_url + '3/movie/' + id +'?language=pt-br&api_key=' + api.key;
    return fetch(url).then(result => result.json());
}

export const genreMoviesInAPI = () =>{
    const url = api.request_url + '3/genre/movie/list?language=pt-br&api_key=' + api.key;
    return fetch(url).then(result => result.json());
}