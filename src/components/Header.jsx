import React from 'react';
import {Link} from '@reach/router'

function Header() {
    return (<>
        <h1>NC News</h1>
        <nav>
        <Link to="/articles">Articles</Link>
        <Link to="/topics">Topics</Link>
        </nav>
    </>)
};

export default Header;

