import React from 'react';
import { Link } from '@reach/router'

export default class Header extends React.Component {
    render() {
        return (<>
            <h1>NC News</h1>
            <p>you are logged in as {this.props.user}</p>
            <nav>
                <Link to="/articles">Articles</Link>
                <Link to="/topics">Topics</Link>
            </nav>
        </>)
    }
};