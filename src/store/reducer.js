import {
  COUNTRY_NAMES,
  SEARCH_COUNTRY,
  SUBMIT_BTN,
  GET_COUNRTY_WEATHER,
  SHOW_LOADING,
  HIDE_LOADING,
} from './action';

const initialState = {
  error: false,
  searchText: '',
  weatherDetail: {},
  countryNameList: [],
  loading: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNTRY_NAMES:
      return {
        ...state,
        countryNameList: payload,
      };

    case SEARCH_COUNTRY:
      return {
        ...state,
        searchText: payload,
      };

    case SUBMIT_BTN: {
      localStorage.setItem(
        'countryPopulation',
        JSON.stringify(state.searchText)
      );

      return state;
    }

    case GET_COUNRTY_WEATHER:
      localStorage.setItem('selectedCountry', JSON.stringify(payload));
      return { ...state, weatherDetail: payload };

    case SHOW_LOADING:
      return { ...state, loading: true };

    case HIDE_LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default reducer;
