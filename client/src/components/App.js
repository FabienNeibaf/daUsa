import React from 'react';
import { Router } from '@reach/router';

import Home from './Home';
import Login from './Login';
import Signout from './Signout';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/*" />
        <Login path="/login" />
        <Signout path="/signout" />
        <Register path="/register" />
      </Router>
    </div>
  );
}

export default App;
