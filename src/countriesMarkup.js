import { getRefs } from "./getRefs";

const refs = getRefs();

export function clearCountryList() {
    return (refs.countryList.innerHTML = '');
}
export function clearCountryInfo() {
    return (refs.countryInfo.innerHTML = '');
}

export function markupList(e) {
    return e.map(({ flags, name }) => {
        refs.countryList.style.listStyle = 'none';
        refs.countryList.insertAdjacentHTML(
        'afterbegin',
        `<li class='country-list__item'>
        <img src="${flags.svg}" alt="flag of ${name.official}" width="60" height="40" >${name.official}</li>`
        );
    }).join('');
}

export function markupInfo(e) {
    return e.map(({ flags, name, capital, population, languages }) => {
        refs.countryInfo.insertAdjacentHTML(
            'afterbegin',
            `<img src="${flags.png}" alt="flag of ${name.official}" width="320">
            <h1>${name.common}</h1>
            <p>Capital: <span>${capital}</span></p>
            <p>Population: <span>${population}</span></p>
            <p>Languages: <span>${Object.values(languages)}</span></p>`
            );
    }).join('');
    
}