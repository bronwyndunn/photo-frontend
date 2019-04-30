import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import PhotoGrid from './components/PhotoGrid';
import StripeProviderForm from './components/Stripe/StripeProviderForm';
import Uploader from './components/Dropzone/Uploader'
// import { Uploader } from './components/Uploader'
import {Elements, StripeProvider} from 'react-stripe-elements';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/store';
// think about using apolo-client instead of apollo-boost
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createUploadLink } from 'apollo-upload-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import EnsureLoggedInContainer from './components/EnsureLoggedInContainer';


const store = configureStore();

const createApolloClient = (cache = {}) =>
  new ApolloClient({
    ssrMode: typeof window !== 'undefined',
    cache: new InMemoryCache().restore(cache),
    link: createUploadLink({
      uri: 'http://localhost:9000/graphql'
    })
  })

const client = createApolloClient()

ReactDOM.render(
    <ApolloProvider store={ store } client={ client }>
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/admin' component={ Uploader }/>
                <EnsureLoggedInContainer>
                    <Route path='/photos' component={ PhotoGrid }/>
                    <Route path='/checkout' component={ StripeProviderForm }/>
                </EnsureLoggedInContainer>
            </Switch>
        </Router>
    </ApolloProvider>,
    document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
