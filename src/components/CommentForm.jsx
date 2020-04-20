import React, { Component } from 'react';
import styles from '../css/app.module.css'

export default class CommentForm extends Component {
    state = {
        comment: ''
    }
    render() {
        return (
            <form onSubmit={(event) => { this.handleSubmit(event) }}>
                Join the conversation:         
                <br></br>
                <br></br>
                <label htmlFor="commentForm">
                <input id="commentForm" value={this.state.comment} placeholder="type your comment..." onChange={(event) => { this.handleChange(event.target.value) }}></input>
                </label>
                <br></br>
                <br></br>
                <button className={styles.button}>Submit</button>
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
