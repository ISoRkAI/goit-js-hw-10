
import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import {fetchCountries} from './fetchCountries'
import { getRefs } from './getRefs';
import {
  clearCountryInfo,
  clearCountryList,
  markupInfo,
  markupList,
} from './countriesMarkup';

const DEBOUNCE_DELAY = 300;

const refs = getRefs();

refs.input.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

function onInputSearch(e) {
    const inputValue = e.target.value.trim();
    clearCountryInfo();
    clearCountryList();
    if (!inputValue) {
        clearCountryInfo();
        clearCountryList();
        return
    }
    fetchCountries(inputValue)
        .then(onFetchSuccess)
        .catch(onFetchError);
}

function onFetchSuccess(e) {
    // clearCountryInfo();
    // clearCountryList();
    if (e.length >= 2 && e.length <= 10) {
        markupList(e);
        // clearCountryInfo();
    return;
  }
  if (e.length < 2) {
    markupInfo(e);
    // clearCountryList();
    return;
  }
  if (e.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  }
}

function onFetchError() {
    Notify.failure('"Oops, there is no country with that name"');
}