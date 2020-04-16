import React from 'react';
import { Router } from "@reach/router";
import Header from './components/Header';
import Topics from './components/Topics';
import Articles from './components/Articles';
import Article from './components/Article';

class App extends React.Component {
  state = {
    user: 'jessjelly'
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Topics path="/topics" />
          <Articles path="/articles" />
          <Article path="/articles/:article_id" user={this.state.user} />
          <Articles path="/topics/:topic" />
        </Router>
      </div>
    );
  }
}

export default App;
