import React from "react";
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import wineFridge from '../img/wineFridge.svg';


export default function LandingPage() {
    return (
        <section className={styles.landingPageContainer}>
            <Link to="/categories">
                <img className={styles.wineFridge} src={wineFridge}></img>
            </Link>
        </section>
    )
}