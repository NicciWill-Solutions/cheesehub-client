import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cheeseReducer } from './reducers/cheese';


export default createStore( cheeseReducer, 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

  