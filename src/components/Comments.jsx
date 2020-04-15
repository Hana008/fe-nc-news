import React, { Component } from 'react';
import * as api from '../utils/api'
import Vote from './Vote';

export default class Comments extends Component {
    state = {
        comments: []
    }
    componentDidMount() {
        this.fetchComments()
    }
    render() {
        // console.log(this.props.article_id)
        return (
            <section>
                <h4>
                    COMMENTS
                    </h4>
                <ul>
                    {this.state.comments.map((comment) => {
                        console.log(comment)
                        return (
                            <li key={comment.comment_id}>
                                <h5>{comment.author}</h5>
                                <p>{comment.body}</p>
                                <Vote id={comment.comment_id} votes={comment.votes} path={'comments'}/>
                            </li>
                        )
                    })}
                </ul>
            </section>
        )
    }

    fetchComments = () => {
        api.getComments(this.props.article_id).then((comments) => {
            this.setState(comments)
        })
    }
}
