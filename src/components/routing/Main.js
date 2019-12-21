import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import WebDevelopment from './WebDevelopment';
import Research from './Research';
import Bachelor from './Bachelor';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/research" component={Research} />
      <Route path="/web_development" component={WebDevelopment} />
      <Route path="/bachelor" component={Bachelor} />
    </Switch>
  </main>
);

export default Main;