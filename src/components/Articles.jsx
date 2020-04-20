import React, { Component } from 'react';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import Loading from './Loading'
import ErrorMessage from './ErrorMessage';

export default class Articles extends Component {
    state = {
        articles: [],
        isLoading: true,
        error: false
    }

    componentDidMount() {
        this.fetchArticles(this.props.topic)
    }
    render() {
        if(this.state.error) return <ErrorMessage errorMessage={this.state.error}/>
        if (this.state.isLoading) return <Loading />
        return (
            <main>
                {this.props.topic?<h2>{this.props.topic + ' articles'}</h2>: <h2>Articles</h2> }
                <label htmlFor="sort">sort</label>
                <select id="sort" onClick={(event) => { this.fetchArticles(undefined, event.target.value) }}>
                    <option value="comment_count">number of comments</option>
                    <option value="created_at">date</option>
                    <option value="votes">likes</option>
                    <option value="title">alphabetically</option>
                    <option value="author">author</option>
                </select>
                <label htmlFor="order">order by</label>
                <select id="order" onClick={(event) => { this.fetchArticles(undefined, undefined, event.target.value) }}>
                    <option value="asc">ascending</option>
                    <option value="desc">descending</option>
                </select>
                <ul>
                    {this.state.articles.map((article) => {
                        return (
                            <li key={article.article_id} >
                                {this.props.topic ? <h3>{article.title}</h3> : <Link to={`/articles/${article.article_id}`}> <h3>{article.title}</h3></Link>}
                                <p>{article.body.slice(0, 100) + '...'}</p>
                                <p>
                                <span role="img" aria-label="user">👤 {article.author}</span> 
                                <span role="img" aria-label="posted">📮 {article.created_at.slice(0, 9)}</span>
                                <span role="img" aria-label="votes">{article.votes} 👍</span>
                                <span role="img" aria-label="comments">💬 {article.comment_count}</span>
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </main>
        )
    }
    fetchArticles = (topic, sort, order) => {
        return api.getArticles(topic, sort, order).then(({ articles }) => {
            this.setState({ articles, isLoading: false })
            //render loading while sorting or order queries
        })
        .catch((err) => {
            this.setState({error: err.response.data.msg})
        })
       
    }
}
