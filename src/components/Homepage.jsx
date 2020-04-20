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
        this.getArticle()
    }
    render() {
        if(this.state.error) return <ErrorMessage errorMessage={this.state.error}/>
        return (
            <main>
                {this.state.article.map((component) => {
                    return <article key={component.article_id}>
                    <h2>Most popular article</h2>
                        <Link to={`/articles/${component.article_id}`}><p>{component.title}</p> </Link>
                        <p>written by {component.author}</p>
                        <p>{component.votes} people liked this</p>
                    </article>
                })}
                {/* <h2>Most popular topic</h2>
                {this.getTopic()} */}
            </main>
        )
    }
    getArticle = () => {
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
