import React from 'react';
import * as api from '../utils/api';
import {Link} from '@reach/router';
import Error from './Error'

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
        if(this.state.error) return <Error errorMessage={this.state.error}/>
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
        .catch((err)=> {
            this.setState({error: err.response.data.msg})
        })
       
    }
}
