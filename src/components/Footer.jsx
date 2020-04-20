import React from 'react';
import github from '../images/github.png';
import styles from '../css/app.module.css'

export default function Footer() {
    return (
        <footer>
         <a href="https://github.com/Hana008" className={styles.footer}>
             <img src={github} alt="github icon" ></img></a> 
        </footer>
    )
}
