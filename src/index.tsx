import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { Home } from './home/Home';
import Projects from './projects/Projects';
import * as serviceWorker from './serviceWorker';
import { Memory } from './memory/Memory';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={ Home } />
            <Route path="/memory" component= { Memory } />
            <Route path="/projects" component={ Projects } />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
