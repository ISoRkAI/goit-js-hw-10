const URL = 'https://restcountries.com/v3.1/name/'
const PARAMS = 'fields=capital,population,flags,languages,name'
export function fetchCountries(name) {
    return fetch(`${URL}${name}?${PARAMS}`)
        .then(response => {
            if (!response.ok || response.status === 404) {
                throw new Error(response.status);
            }
            return response.json();
        })
}






