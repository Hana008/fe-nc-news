import React from 'react';

export default function ErrorMessage() {
    if (this.props.errorMessage) return <p>{this.props.errorMessage}</p>
    return <p>error on our side, looks like we've ran out of ink...</p>
};
