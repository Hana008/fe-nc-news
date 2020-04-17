import React, { Component } from 'react';
import * as api from '../utils/api'
import { Link } from '@reach/router';
import ErrorMessage from './ErrorMessage';

export default class Topics extends Component {
    state = {
        topics: [],
        articles: [],
        error: false
    }

    componentDidMount() {
        this.fetchTopics()
    }

    render() {
        if(this.state.error) return <ErrorMessage errorMessage={this.state.error}/>
        return (
            <main>
                <ul>
                    {this.state.topics.map((topic) => {
                        return <li key={topic.slug}>
                            <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
                        </li>
                    })}
                </ul>
            </main >
        )
    }

    fetchTopics = () => {
        api.getTopics().then((topics) => {
            this.setState(topics)
        })
        .catch((err) => {
            this.setState({ error: err.response.data.msg })
        })
    }

}
