import React from 'react';
import ReactDOM from 'react-dom';
import client from './client';
import { ApolloProvider } from "@apollo/client";
import LanguageList from './components/language-list';
import CountryList from './components/country-list';
import { Router } from '@reach/router';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <React.StrictMode>
        <Router>
          <LanguageList path="/" />
          <CountryList path="countries/:languageName" />
        </Router>
      </React.StrictMode>
    </ApolloProvider>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));
