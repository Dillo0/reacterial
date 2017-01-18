import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './components/Login.jsx';

const App = () => (
    <MuiThemeProvider>
        <Login />
    </MuiThemeProvider>
);

render(
    <App />,
    document.getElementById('react-container')
);

/*<Router>
    <Route path="/" component={App} />
</Router>*/
