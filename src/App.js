import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/home';
import Movie from './pages/movie';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Header />
          <Route path="/" exact={true} component={Home} />
          <Route path="/filme" component={Movie} />
          <Route path="*" component={Home} />
        </Switch>
      </ BrowserRouter>
    );
  }
}

export default App;