import React from 'react';
import { Router } from "@reach/router";
import Header from './components/Header';
import Topics from './components/Topics';
import Articles from './components/Articles';
import Article from './components/Article';
import Homepage from './components/Homepage';
import ErrorMessage from './components/ErrorMessage'
import Footer from './components/Footer';
import styles from './css/app.module.css'

class App extends React.Component {
  state = {
    user: 'jessjelly'
  }
  render() {
    return (
      <div className={styles.app}>
        <Header user={this.state.user} />
        <Router className={styles.mainArea}>
          <Homepage path="/" />
          <Topics path="/topics" />
          <Articles path="/articles" />
          <Article path="/articles/:article_id" user={this.state.user} />
          <Articles path="/topics/:topic" />
          <ErrorMessage default />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
