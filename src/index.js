import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Welcome from './components/Welcome';


  
export default class Routes extends Component{
  render(){
    return (
      <BrowserRouter>      <Switch>
      <Route path="/" exact component={App} />
      <Route path="/Welcome" exact component={Welcome} />
      
  </Switch>
  </BrowserRouter>

    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('app')
);
