
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import tasks_reducer from './reducers/tasks_reducer';

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

// Redux: Combine Multiple Reducers together.
const rootReducer = combineReducers({
    tasks_reducer,
});
  
// Redux: Setup Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Redux: Setup the Store
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
const store = composeEnhancers(applyMiddleware(...middlewares))(createStore)(rootReducer);

export default store;