import React from 'react';
import ReactDOM from 'react-dom';
import client from './client';
import { ApolloProvider } from "@apollo/client";
import LanguageList from './components/language-list';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <React.StrictMode>
        <LanguageList />
      </React.StrictMode>
    </ApolloProvider>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));