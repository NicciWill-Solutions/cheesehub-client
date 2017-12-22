import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import './index.css';

import registerServiceWorker from './registerServiceWorker';
import CheeseList from './components/cheese-list';

ReactDOM.render(
    <Provider store={store}> 
        <CheeseList />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();


