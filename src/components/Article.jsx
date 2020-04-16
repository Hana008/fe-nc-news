import React, { Component } from 'react';
import * as api from '../utils/api';
import Vote from './Vote';
import Comments from './Comments';
import Error from './Error';
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
        if(this.state.error) return <Error errorMessage={this.state.error}/>;
        if(this.state.isLoading) return <Loading/>;
        return (
            this.state.article.map((component) => {
                return (
                    <article key={component.article_id}>
                        <h3>{component.title}</h3>
                        <h4>author: {component.author}</h4>
                        <p>{component.body}</p>
                        <Vote votes={component.votes} id={component.article_id} path={'articles'} />
                        <p>{component.comment_count} comments</p>
                        <Comments article_id={component.article_id} user={this.props.user} />
                    </article>
                )
            })
        )
    }

    fetchArticle = () => {
        return api.getArticle(this.props.article_id)
            .then((article) => {
                this.setState({ article: [article], isLoading: false })
            })
            .catch((err)=> {
                this.setState({error: err.response.data.msg})
            })
    }
}
