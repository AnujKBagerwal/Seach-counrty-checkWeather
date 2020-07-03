import React from 'react';
import './App.scss';
import { Switch, Route, HashRouter } from 'react-router-dom';

import SearchContry from './container/SearchCountry';
import DisplayCountryWeather from './container/DisplayCountryWeather';

const App = () => {
  console.log('Prcess', process.env.REACT_APP_API_COUNTRY);
  return (
    <div className="App">
      {/* Use HashRouter for routing in App */}
      <HashRouter>
        <Switch>
          <Route path={'/'} component={SearchContry} exact />
          <Route path={'/:name/:id'} component={DisplayCountryWeather} exact />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
