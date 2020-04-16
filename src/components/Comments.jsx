import React, { Component } from 'react';
import * as api from '../utils/api'
import Vote from './Vote';
import CommentForm from './CommentForm';

export default class Comments extends Component {
    state = {
        comments: []
    }
    componentDidMount() {
        this.fetchComments()
    }
    render() {
        console.log(this.state.comments)
        return (
            <section>
                <h4>
                    COMMENTS
                    </h4>
                <label htmlFor="sort">sort by: </label>
                <select id="sort" onChange={(event) => {this.fetchComments(event.target.value)}}>
                    <option value="votes">votes</option>
                    <option value="comment_id">comment</option>
                    <option value="author">author</option>
                </select>
                <label htmlFor="order">order by: </label>
                <select onChange={(event) => {this.fetchComments(event.target.value)}} id="order">
                    <option value="asc">asc</option>
                    <option value="desc">desc</option>
                </select>
                <ul>
                    {this.state.comments.map((comment) => {
                        return (
                            <li key={comment.comment_id}>
                                <h5>{comment.author}</h5>
                                <p>{comment.body}</p>
                                {comment.author === this.props.user ? <button onClick={() => { this.removeComment(comment.comment_id) }}>delete</button> : <Vote id={comment.comment_id} votes={comment.votes} path={'comments'} />}
                            </li>
                        )
                    })}
                </ul>
                <CommentForm article_id={this.props.article_id} user={this.props.user} />
            </section>
        )
    }

    fetchComments = (sort, order) => {
        api.getComments(this.props.article_id, sort, order).then((comments) => {
            console.log(comments)
            this.setState(comments)
        })
    }

    removeComment = (comment_id) => {
        api.deleteComment(comment_id).then(() => {
            const comments = this.state.comments.filter(comment => {
                return comment.comment_id !== comment_id
            })
            this.setState({ comments })
        })
    }

    handleSort = () => { console.log('sorting..') }

}
