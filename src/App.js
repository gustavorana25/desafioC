import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./store";

import Header from './template/ui/header/header';
import Home from './pages/home';
import Movie from './pages/movie';

import { generalStyle } from './template/generalStyle';
import { injectGlobal } from 'styled-components';

injectGlobal`
  ${generalStyle}
`

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <main>
          <Header />
          <BrowserRouter>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/filme" component={Movie} />
              <Route path="*" component={Home} />
            </Switch>
          </ BrowserRouter>
        </main>
      </Provider>
    );
  }
}

export default App;
