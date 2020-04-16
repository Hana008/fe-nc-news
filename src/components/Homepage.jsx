import React from 'react';
import * as api from '../utils/api';
import {Link} from '@reach/router'

export default class Homepage extends React.Component {
    state = {
        article: [],
        topic: []
    }
    componentDidMount() {
        this.getArticle()
    }
    render() {
        return (
            <main>
                <h2>Most popular article</h2>
                {this.state.article.map((component) => {
                    return <article key={component.article_id}>
                        <Link to={`/articles/${component.article_id}`}><h3>{component.title}</h3> </Link>
                        <p>{component.votes} people liked this</p>
                        <p>written by {component.author}</p>
                    </article>
                })}
                <h2>Most popular topic</h2>
            </main>
        )
    }
    getArticle = () => {
        api.getArticles(undefined, 'votes').then((response) => {
            this.setState({ article: [response.articles[0]] })
        })
    }
}
