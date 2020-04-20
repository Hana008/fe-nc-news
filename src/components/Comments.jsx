import React, { Component } from 'react';
import * as api from '../utils/api'
import Vote from './Vote';
import CommentForm from './CommentForm';
import Sort from './Sort';
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';
import styles from '../css/app.module.css'

export default class Comments extends Component {
    state = {
        comments: [],
        isLoading: true,
        error: false
    }
    componentDidMount() {
        this.fetchComments()
    }
    render() {
        if (this.state.error) return <ErrorMessage errorMessage={this.state.error} />
        if (this.state.isLoading) return <Loading />
        return (
            <section>
                <h4>
                    COMMENTS
                    </h4>
                    <CommentForm addComment={this.addComment} />
                <Sort fetchComments={this.fetchComments} />
                <ul>
                    {this.state.comments.map((comment) => {
                        return (
                            <li key={comment.comment_id}>
                                <h5>{comment.author}</h5>
                                <p>{comment.body}</p>
                                {comment.author === this.props.user ? <button onClick={() => { this.removeComment(comment.comment_id) }} className={styles.button}>delete</button> : <Vote id={comment.comment_id} votes={comment.votes} path={'comments'} />}
                            </li>
                        )
                    })}
                </ul>
            </section>
        )
    }

    fetchComments = (sort, order) => {
        api.getComments(this.props.article_id, sort, order)
            .then(({comments}) => {
                this.setState({ comments, isLoading: false })
            })
            .catch((err) => {
                this.setState({ error: err.response.data.msg })
            })
    }

    removeComment = (comment_id) => {
        api.deleteComment(comment_id)
            .then(() => {
                const comments = this.state.comments.filter(comment => {
                    return comment.comment_id !== comment_id
                })
                this.setState({ comments })
            })
    }

    addComment = (comment) => {
        api.postComment(comment, this.props.article_id, this.props.user)
            .then((comment) => {
                this.setState(currentState => { return { comments: [comment, ...currentState.comments] } })
            })
            .catch((err) => {
                this.setState({ error: err.response.data.msg })
            })
    }
}
