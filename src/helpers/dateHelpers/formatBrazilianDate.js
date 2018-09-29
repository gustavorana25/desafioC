export const formatBrazilianDate = (date) => {
    const arrDate = date.split('-')
    return arrDate[2] + '/' + arrDate[1] + '/' + arrDate[0];
} 