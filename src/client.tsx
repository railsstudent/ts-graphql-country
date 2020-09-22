import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
// import { GET_LANGUAGES } from './graphql/queries';
import cache from './cache';

const uri = 'https://countries-274616.ew.r.appspot.com';
const link = new HttpLink({ uri });

// Create an Apollo Client
const client = new ApolloClient({
    cache,
    link
});

// client.query({
//     query: GET_LANGUAGES
// }).then(console.log);

export default client;
