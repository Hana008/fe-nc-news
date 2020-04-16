import React, { Component } from 'react';

export default class Error extends Component {
    render() {
        console.log(this.props.errorMessage)
        if (this.props.errorMessage) return <p>{this.props.errorMessage}</p>
        return <p>error on our side, looks like we've ran out of ink...</p>
    }
};
