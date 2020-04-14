import React from 'react';
import { Router } from "@reach/router";
import Header from './components/Header';
import Topics from './components/Topics';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Topics path="/topics"/>
      </Router>
    </div>
  );
}

export default App;
