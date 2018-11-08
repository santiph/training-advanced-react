import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const LOGOUT_USER_QUERY = gql`
    mutation LOGOUT_USER_QUERY {
        signout {
            message
        }
    }
`;

const Signout = () => (
    <Mutation
        mutation={LOGOUT_USER_QUERY}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    >
        {(signout) => (<button onClick={signout}>Sign Out</button>)}
    </Mutation>
);

export default Signout;
