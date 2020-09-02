import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = 'https://countries-274616.ew.r.appspot.com';

// Create an Apollo Client
const client = new ApolloClient({
    uri,
    cache: new InMemoryCache()
});

export default client;
