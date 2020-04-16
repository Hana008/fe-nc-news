import React, { Component } from 'react';
import * as api from '../utils/api';

export default class CommentForm extends Component {
    state = {
        comment: ''
    }
    render() {
        return (
            <form onSubmit={(event) => {this.addComment(event)}}>
                <input value={this.state.comment} placeholder="type your comment..." onChange={(event) => {this.handleChange(event.target.value)}}></input>
                <button >submit</button>
            </form>
        )
    }

    handleChange = (text) => {
        this.setState({comment: text}) 
    }
  
    addComment = (event)=>{
        event.preventDefault()
        api.postComment(this.state.comment, this.props.article_id, this.props.user).then(()=> {
            this.setState({comment:''})
        })
    }
}
