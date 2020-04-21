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
        const { error, isLoading, comments } = this.state
        if (error) return <ErrorMessage errorMessage={error} />
        if (isLoading) return <Loading />
        return (
            <section>
                <h4>
                    COMMENTS
                    </h4>
                <CommentForm addComment={this.addComment} />
                <Sort fetchComments={this.fetchComments} />
                <ul>
                    {comments.map((comment) => {
                        const { comment_id, author, body, votes } = comment
                        return (
                            <li key={comment_id}>
                                <h5>{author}</h5>
                                <p>{body}</p>
                                {author === this.props.user ? <button onClick={() => { this.removeComment(comment_id) }} className={styles.button}>delete</button> : <Vote id={comment_id} votes={votes} path={'comments'} />}
                            </li>
                        )
                    })}
                </ul>
            </section>
        )
    }

    fetchComments = (sort, order) => {
        api.getComments(this.props.article_id, sort, order)
            .then(({ comments }) => {
                this.setState({ comments, isLoading: false })
            })
            .catch((err) => {
                this.setState({ error: err.response.data.msg })
            })
    }

    removeComment = (comment_id) => {
        api.deleteComment(comment_id)
            .then(this.setState((state) => {
                const comments = state.comments.filter((comment) => {
                    return comment.comment_id !== comment_id;
                });
                return { comments };
            }))
            .catch((err) => {
                this.setState({ error: err.response.data.msg })
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
