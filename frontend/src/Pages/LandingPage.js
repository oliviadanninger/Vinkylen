import React from "react";
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import wineFridge from '../img/wineFridge.svg';


export default function LandingPage() {
    return(
        <section className={styles.landingPageContainer}>
            <img className={styles.wineFridge} src={wineFridge}></img>
            <article>
                <Link to="/categories">
                    <button>Kika i kylen</button>
                </Link>
                <Link to="/add-wine">
                    <button>Lägg till vin</button>
                </Link>
            </article>
        </section>
    )
}