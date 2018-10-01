export const formatBrazilianDate = (date) => {
    if (date){
        const arrDate = date.split('-');
        return arrDate[2] + '/' + arrDate[1] + '/' + arrDate[0];
    }
} 