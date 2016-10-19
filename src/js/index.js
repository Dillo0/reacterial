import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './components/Login.jsx';

const App = () => (
  <MuiThemeProvider>
    <Login />
  </MuiThemeProvider>
);

window.onload = function(){
  ReactDOM.render(<App />, document.getElementById('react-container'));
}
