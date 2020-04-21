import React from 'react';

export default function ErrorMessage(props) {
    const { errorMessage } = props
    if (errorMessage) return <p>{errorMessage}</p>
    return <p>error on our side, looks like we've ran out of ink...</p>
};
