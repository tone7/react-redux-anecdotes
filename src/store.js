import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import notificationReducer from './reducers/notificationReducer';
import anecdoteReducer from './reducers/anecdoteReducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import filterReducer from './reducers/filterReducer';
import timerReducer from './reducers/timerReducer';

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer,
    timerId: timerReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

