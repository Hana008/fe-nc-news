import React, { Component } from 'react';
import * as api from '../utils/api';
import Vote from './Vote';
import Comments from './Comments';
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';

export default class Article extends Component {
    state = {
        article: [],
        error: false,
        isLoading: true
    }

    componentDidMount() {
        this.fetchArticle()
    }
    render() {
        const { error, isLoading, article } = this.state
        if (error) return <ErrorMessage errorMessage={error} />;
        if (isLoading) return <Loading />;
        return (
            <main>
                {article.map((component) => {
                    const { article_id, title, author, body, votes, comment_count } = component
                    return (
                        <article key={article_id}>
                            <h3>{title}</h3>
                            <h4>Author: {author}</h4>
                            <p>{body}</p>
                            <Vote votes={votes} id={article_id} path={'articles'} />
                            <p>{comment_count} comments</p>
                            <br></br>
                            <Comments article_id={article_id} user={this.props.user} />
                        </article>
                    )
                })}
            </main>
        )
    }

    fetchArticle = () => {
        return api.getArticle(this.props.article_id)
            .then((article) => {
                this.setState({ article: [article], isLoading: false })
            })
            .catch((err) => {
                this.setState({ error: err.response.data.msg })
            })
    }
}
