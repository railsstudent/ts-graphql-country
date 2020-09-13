import React from 'react';
import ReactDOM from 'react-dom';
import client from './client';
import { ApolloProvider } from "@apollo/client";
import LanguageList from './components/language-list';
import CountryList from './components/country-list';
import { createHistory, LocationProvider, Router } from '@reach/router';

const App = () => {
  const history = createHistory(window);
  
  return (
    <ApolloProvider client={client}>
      <React.StrictMode>
        <LocationProvider history={history}>
          <Router>
            <LanguageList path="/" />
            <CountryList path="countries/:languageName" />
          </Router>
        </LocationProvider>
      </React.StrictMode>
    </ApolloProvider>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));
