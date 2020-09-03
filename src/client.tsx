import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { GET_LANGUAGES } from './graphql/queries';

const uri = 'https://countries-274616.ew.r.appspot.com';

// Create an Apollo Client
const client = new ApolloClient({
    uri,
    cache: new InMemoryCache()
});

// client.query({
//     query: GET_LANGUAGES
// }).then(console.log);

export default client;
