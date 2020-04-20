import React, { Component } from 'react';
import styles from '../css/app.module.css'

export default class Sort extends Component {

    render() {
        return (
            <>
                <select id="sort" onChange={(event) => { this.props.fetchComments(event.target.value, undefined) }}>
                    <option value="votes">votes</option>
                    <option value="comment_id">comment</option>
                    <option value="author">author</option>
                </select>
           <label className={styles.sort} htmlFor="sort">sort by: </label>
                <select onChange={(event) => { this.props.fetchComments(undefined, event.target.value) }} id="order">
                    <option value="asc">ascending</option>
                    <option value="desc">descending</option>
                </select>
                <label className={styles.sort} htmlFor="order">order by: </label>
                </>
        )
    }
}
