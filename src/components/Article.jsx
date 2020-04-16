import React, { Component } from 'react';
import * as api from '../utils/api';
import Vote from './Vote';
import Comments from './Comments';

export default class Article extends Component {

    state = {
        article: []
    }

    componentDidMount() {
        this.fetchArticle()
    }
    render() {
        return (
            this.state.article.map((component) => {
                return (
                    <article key ={component.article_id}>
                            <h3>{component.title}</h3>
                            <h4>author: {component.author}</h4>
                            <p>{component.body}</p>
                            <Vote votes={component.votes} id={component.article_id} path={'articles'}/>
                            <p>{component.comment_count} comments</p>
                            <Comments article_id={component.article_id} user={this.props.user}/>
                        </article>
                    )
                })
        )
    }

    fetchArticle = () => {
        return api.getArticles().then((res) => {
            return res.articles.filter(article => {
                return article.article_id === parseInt(this.props.article_id)
            })
        }).then((article) => {
            this.setState({ article })
        })
    }
}
