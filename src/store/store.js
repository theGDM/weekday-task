import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import JobDataReducer from '../reducers/JobsDataReducer';

//creating rootReducer by combining all thr created reducers
const rootReducer = combineReducers({
    jobs: JobDataReducer
});

//creating store object using rootReducer and composeWithDevTools
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;