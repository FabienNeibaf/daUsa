import React from 'react';
import { Router } from '@reach/router';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Register path="/register" />
      </Router>
    </div>
  );
}

export default App;
