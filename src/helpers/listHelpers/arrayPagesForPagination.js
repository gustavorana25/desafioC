export const ArrayOfPages = (arr, limit) => {
    let pages = [];
    for (let i = 0; i < (arr.length / limit);i++){
        pages.push(i+1);
    }
    return pages;
} 