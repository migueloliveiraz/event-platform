import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/cl4poj7cp26d601yw5cnc1czj/master',
  cache: new InMemoryCache(),
});
