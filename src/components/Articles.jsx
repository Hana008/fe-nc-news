import React, { Component } from 'react';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import Loading from './Loading'
import ErrorMessage from './ErrorMessage';
import styles from '../css/app.module.css';

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
        const {error, isLoading, articles} = this.state
        const {topic} = this.props
        if(error) return <ErrorMessage errorMessage={error}/>
        if (isLoading) return <Loading />
        return (
            <main>
                {topic?<h2>{topic + ' articles'}</h2>: <h2>Articles</h2> }
                <select id="sort" onClick={(event) => { this.fetchArticles(undefined, event.target.value) }}>
                    <option value="comment_count">number of comments</option>
                    <option value="created_at">date</option>
                    <option value="votes">likes</option>
                    <option value="title">alphabetically</option>
                    <option value="author">author</option>
                </select>
                <label className={styles.sort} htmlFor="sort">sort</label>
                <select id="order" onClick={(event) => { this.fetchArticles(undefined, undefined, event.target.value) }}>
                    <option value="asc">ascending</option>
                    <option value="desc">descending</option>
                </select>
                <label className={styles.sort} htmlFor="order">order by</label>
                <br></br>
                <ul>
                    {articles.map((article) => {
                        const {article_id, title, body, author, created_at, votes, comment_count} = article
                        return (
                            <li key={article_id} >
                                {topic ? <h3>{title}</h3> : <Link to={`/articles/${article_id}`}> <h3>{title}</h3></Link>}
                                <p>{body.slice(0, 100) + '...'}</p>
                                <p>
                                <span role="img" aria-label="user">👤 {author}</span> 
                                <span role="img" aria-label="posted">📮 {created_at.slice(0, 9)}</span>
                                <span role="img" aria-label="votes">{votes} 👍</span>
                                <span role="img" aria-label="comments">💬 {comment_count}</span>
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
        })
        .catch((err) => {
            this.setState({error: err.response.data.msg})
        })
       
    }
}
