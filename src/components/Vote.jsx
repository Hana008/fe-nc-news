import React, { Component } from 'react';
import * as api from '../utils/api';
import ErrorMessage from './ErrorMessage';

export default class Vote extends Component {
    state = {
        votes: 0,
        disable: false,
        error: false
    }
    render() {
        const {error, disable, votes} = this.state
        if (error) return <ErrorMessage errorMessage={error} />
        return (
            <section>
                <p>{this.props.votes + votes} people liked this</p>
                <button onClick={() => { this.handleClick(1) }} disabled={disable}><span role="img" aria-label="thumbs up">👍</span></button>
                <button onClick={() => { this.handleClick(-1) }} disabled={disable}><span role="img" aria-label="thumbs down">👎</span></button>
            </section>
        )
    }
    handleClick = (vote) => {
        this.setState({ disable: true })
        api.patchVotes(this.props.id, vote, this.props.path)
            .then(() => {
                this.setState((currentState) => { return { votes: currentState.votes + vote } })
            })
            .catch((err) => {
                this.setState({ error: err.response.data.msg })
            })
    }
}

