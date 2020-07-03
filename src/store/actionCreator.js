import {
  COUNTRY_NAMES,
  SEARCH_COUNTRY,
  SUBMIT_BTN,
  GET_COUNRTY_WEATHER,
  SHOW_LOADING,
  HIDE_LOADING,
} from './action';
import { getCountry, getWeather } from '../services/services';

export const showLoader = () => {
  return {
    type: SHOW_LOADING,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADING,
  };
};

export const searchCountryAction = (payload) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_COUNTRY,
      payload: payload,
    });
  };
};

export const sumbitBtnAction = () => {
  return (dispatch) => {
    dispatch({
      type: SUBMIT_BTN,
    });
  };
};

export const countryNameAction = (value) => {
  return (dispatch) => {
    //
    dispatch(showLoader());
    getCountry(value)
      .then((res) => {
        dispatch(hideLoader());
        dispatch({
          type: COUNTRY_NAMES,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(hideLoader());
        alert('Country Match Not Found');
      });
  };
};

export const getCountryWeather = (payload) => {
  return (dispatch) => {
    dispatch(showLoader());
    getWeather(payload)
      .then((res) => {
        dispatch(hideLoader());
        dispatch({
          type: GET_COUNRTY_WEATHER,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(hideLoader());
        alert('Weather Details Not Found');
      });
  };
};
