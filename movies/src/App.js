import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import OneShow from './components/OneShow';

// Do not change this page!

function App() {
  return (
    <Router>
      {/* If you want to read more about React Router you can do it here: https://reactrouter.com/web/guides/quick-start */}
      <Switch>
        <Route path='/show/:id'>
          <OneShow />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
