import React, { Component } from 'react';
import * as api from '../utils/api'
import { Link } from '@reach/router';
import ErrorMessage from './ErrorMessage';
import styles from '../css/app.module.css'

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
        const {topics, error} = this.state
        if(error) return <ErrorMessage errorMessage={error}/>
        return (
            <main className={styles.topicCard}>
                <ul>
                    {topics.map((topic) => {
                        const {slug} = topic
                        return <li key={slug} className={styles.topicLinkContainer}>
                            <Link to={`/topics/${slug}`}>{slug}</Link>
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
