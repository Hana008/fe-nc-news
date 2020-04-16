import React, { Component } from 'react';

export default class CommentForm extends Component {
    state = {
        comment: ''
    }
    render() {
        return (
            <form onSubmit={(event) => { this.handleSubmit(event) }}>
                <input value={this.state.comment} placeholder="type your comment..." onChange={(event) => { this.handleChange(event.target.value) }}></input>
                <button >submit</button>
            </form>
        )
    }

    handleChange = (text) => {
        this.setState({ comment: text })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addComment(this.state.comment)
        this.setState({ comment: '' })
    }
}
