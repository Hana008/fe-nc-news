import React from 'react';

export default function ErrorMessage(props) {
    if (props.errorMessage) return <p>{props.errorMessage}</p>
    return <p>error on our side, looks like we've ran out of ink...</p>
};
