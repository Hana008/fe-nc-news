import React from 'react';
import { Router } from "@reach/router";
import Header from './components/Header';
import Topics from './components/Topics';
import Articles from './components/Articles';
import Article from './components/Article';
import Homepage from './components/Homepage';
import Error from './components/Error'

class App extends React.Component {
  state = {
    user: 'jessjelly'
  }
  render() {
    return (
      <div className="App">
        <Header user={this.state.user}/>
        <Router>
          <Homepage path="/" />
          <Topics path="/topics" />
          <Articles path="/articles" />
          <Article path="/articles/:article_id" user={this.state.user} />
          <Articles path="/topics/:topic" />
          <Error default />
        </Router>
      </div>
    );
  }
}

export default App;
