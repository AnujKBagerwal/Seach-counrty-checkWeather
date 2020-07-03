import Axios from 'axios';
import { api_key } from '../constants/apiKey';

/*API for Country Entered weather is Available or Not  */
export const getCountry = (value) => {
  return Axios.get(`${process.env.REACT_APP_API_COUNTRY}/${value}`);
};

/*API for Fetch weather Data  */
export const getWeather = (payload) => {
  return Axios.get(
    `${process.env.REACT_APP_API_WEATHER}?access_key=${api_key}&query=${payload}`
  );
};
