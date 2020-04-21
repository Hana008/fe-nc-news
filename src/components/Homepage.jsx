import React from 'react';
import * as api from '../utils/api';
import {Link} from '@reach/router';
import ErrorMessage from './ErrorMessage'

export default class Homepage extends React.Component {
    state = {
        article: [],
        topic: [],
        error: false
    }
    componentDidMount() {
        this.fetchArticle()
    }
    render() {
        const {error, article} = this.state
        if(error) return <ErrorMessage errorMessage={error}/>
        return (
            <main>
                {article.map((component) => {
                    const {article_id, title, author, votes} = component;
                    return <article key={article_id}>
                    <h2>Most popular article</h2>
                        <Link to={`/articles/${article_id}`}><p>{title}</p> </Link>
                        <p>written by {author}</p>
                        <p>{votes} people liked this</p>
                    </article>
                })}
                {/* <h2>Most popular topic</h2>
                {this.getTopic()} */}
            </main>
        )
    }
    fetchArticle = () => {
        api.getArticles(undefined, 'votes').then((response) => {
            this.setState({ article: [response.articles[0]] })
        })
        .catch((err)=> {
            this.setState({error: err.response.data.msg})
        })
       
    }

    getTopic = () => {
        api.getArticles().then((response) => {

            // console.log(response.articles)
        })
    }
}
