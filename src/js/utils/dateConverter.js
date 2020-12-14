function dateToConverter() {
    const today = new Date();
    const date = today.toISOString().split('T')[0];
    return date;
}

function dateFromConverter() {
    let today = new Date();
    today.setDate(today.getDate() - 7);
    const date = today.toISOString().split('T')[0];
    return date;
}

function dateConverterForm (date) {
    return date.toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).replace('г.', '');
}

export { dateConverterForm };

export const dateTo = dateToConverter();
export const dateFrom = dateFromConverter();

