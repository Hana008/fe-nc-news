import React from 'react';
import { Link } from '@reach/router';

export default class Header extends React.Component {
    render() {
        return (<header>
            <h1>NC News</h1>
            <nav >
                <Link to='/' >Home</Link>
                <Link to="/articles" >Articles</Link>
                <Link to="/topics" >Topics</Link>
            </nav>
            <p>you are logged in as {this.props.user}</p>
        </header>)
    }
};