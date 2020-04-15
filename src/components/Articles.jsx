import React, { Component } from 'react';
import * as api from '../utils/api';
import {Link} from '@reach/router';
import Loading from './Loading'

export default class Articles extends Component {
    state = {
        articles: [],
        isLoading: true
    }

    componentDidMount() {
        this.fetchArticles(this.props.topic)
    }
    render() {
        if(this.state.isLoading) return <Loading/>
        return (
            <main>
                <h2>Articles</h2>
                <ul>
                    {this.state.articles.map((article) => {
                        return (
                            <li key={article.article_id} >
                                {this.props.topic ? <h3>{article.title}</h3> : <Link to={`/articles/${article.article_id}`}> <h3>{article.title}</h3></Link> }
                                <p>Author: {article.author}</p>
                                <p>{article.body.slice(0, 50) + '...'}</p>
                                <p>Created: {article.created_at.slice(0, 9)}</p>
                                <p>Votes: {article.votes}</p>
                                <p>Comment count: {article.comment_count}</p>
                            </li>
                        )
                    })}
                </ul>
            </main>
        )
    }
    fetchArticles = (topic) => {
        return api.getArticles(topic).then(({articles}) => {
            this.setState({ articles, isLoading: false})
        })
    }
}
