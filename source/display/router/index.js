import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import ScreenList from '../screen/list-tree';
import ScreenEdit from '../screen/edit-tree';
import ScreenResult from '../screen/result';

import leafReducer from '../component/leaf/connect/reducer';
import twigReducer from '../component/twig/connect/reducer';
import treeReducer from '../component/tree/connect/reducer';

let combineReducer = combineReducers({
    leaf: leafReducer,
    twig: twigReducer,
    tree: treeReducer
});

let combineStore = createStore(combineReducer);

// Render to index.html
ReactDOM.render((
    <Provider store={combineStore}>
        <Router history={hashHistory}>
            <Route path="result" component={ScreenResult} />
            <Route path="list-tree" component={ScreenList} />
            <Route path="edit-tree/:treeId" component={ScreenEdit} />
        </Router>
    </Provider>
), document.getElementById('electron-container'));
