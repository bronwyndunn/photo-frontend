import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const store = configureStore();

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

ReactDOM.render(
    <ApolloProvider store={store} client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
