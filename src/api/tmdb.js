const api = {
    request_url: 'https://api.themoviedb.org/',
    image_url: 'https://image.tmdb.org/t/p/',
    key: 'ab9784d6bd2d7cf6dbf8a2840a51a9bc'
}

export const search = (search_input) =>{
    const url = api.request_url + '3/search/movie?language=pt-br&api_key=' + api.key + '&query=' + search_input;
        fetch(url)
        .then(result => result.json())
        .then(data=>{
            console.log(data);
        })
}

export const discover = () =>{
    const url = api.request_url + '3/discover/movie?language=pt-br&api_key=' + api.key + '&sort_by=popularity.desc';
        fetch(url)
        .then(result => result.json())
        .then(data=>{
            console.log(data);
        })
}