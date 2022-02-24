import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import championFormData from './reducers/championFormData'
import errors from './reducers/errors'
import championsReducer from './reducers/championsReducer'

import thunk from 'redux-thunk';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers({
  loginForm,
  championFormData,
  signupForm,
  errors,
  championsReducer
});

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store