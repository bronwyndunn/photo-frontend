import './index.css'
import Home from './components/Home'
import PhotoGrid from './components/PhotoGrid'
import StripeProviderForm from './components/Stripe/StripeProviderForm'
import { Dropzone } from './components/Dropzone'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import configureStore from './store/store'
import * as serviceWorker from './serviceWorker'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { Elements, StripeProvider } from 'react-stripe-elements'


const store = configureStore()

const client = new ApolloClient({
  uri: "http://localhost:9000/graphql"
  // uri: "http://3.212.29.209:9000/graphql"
})

ReactDOM.render(
    <ApolloProvider store={ store } client={ client }>
        <Router>
            <Switch>
                <Route exact path='/' component={ Home }/>
                <Route path='/photos' component={ PhotoGrid }/>
                <Route path='/checkout' component={ StripeProviderForm }/>
                <Route path='/admin' component={ Dropzone }/>
            </Switch>
        </Router>
    </ApolloProvider>,
    document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
