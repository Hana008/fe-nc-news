import React from 'react';
import loader from '../images/loader.gif';
import styles from '../css/app.module.css'

export default function Loading() {
return <img src={loader} alt="loading sign" className={styles.loading}></img>
}