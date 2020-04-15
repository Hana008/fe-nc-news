import React, { Component } from 'react';
import * as api from '../utils/api'
import { Link } from '@reach/router';

export default class Topics extends Component {
    state = {
        topics: [],
        articles: []
    }

    componentDidMount() {
        this.fetchTopics()
    }

    render() {
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
    }

}
