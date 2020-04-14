import React from 'react';
import { Router } from "@reach/router";
import Header from './components/Header';
import Topics from './components/Topics';
import Articles from './components/Articles';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Topics path="/topics" />
        <Articles path="/articles/*" />
        <Article path="/articles/:article_id" />
        <Articles path="/topics/:topic" />
      </Router>
    </div>
  );
}

export default App;
