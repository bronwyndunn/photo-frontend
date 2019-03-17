import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export const HELLO = gql`
  query hello {
    hello
  }
`;

export default () => (
  <Query query={HELLO}>
    {({ loading, data }) => !loading && (
        <>
          <h1>heey</h1>
          <h2>{data}</h2>
        </>
    )}
  </Query>
);