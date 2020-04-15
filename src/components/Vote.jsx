import React, { Component } from 'react';
import * as api from '../utils/api';

export default class Vote extends Component {
    state = {
        votes: 0,
        disable: false
    }
    render() {
        return (
            <section>
                <p>{this.props.votes + this.state.votes} people liked this</p>
                <button onClick={() => {this.handleClick(1)}} disabled={this.state.disable}>thumbs up</button>
                <button onClick={() => {this.handleClick(-1)}} disabled={this.state.disable}>thumbs down</button>
            </section>
        )
    }
    handleClick = (vote) => {
        api.patchVotes(this.props.article_id, vote)
        this.setState((currentState) => {return {votes: currentState.votes+ vote, disable: true}})
    }
}

