import React, { Component } from 'react';
import * as api from '../utils/api';

export default class Article extends Component {

    componentDidMount() {
        this.getArticle()
    }
    render() {
        // console.log(this.props.article_id)
        return (
            <div>
                <h3>single article</h3>
                {/* map through state article, if article id matches this.props.articleid then generate li */}
            </div>
        )
    }

    getArticle = () => {
        return api.fetchArticles().then((res) => console.log(res))
    }
}
