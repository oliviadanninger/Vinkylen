import React from "react";
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';


export default function LandingPage() {
    return(
        <section className={styles.landingPageContainer}>
            <article>
                <Link to="/categories">
                    <figure>
                        <button className={styles.btnCategories}>Titta in</button>
                    </figure>
                </Link>

                <Link to="/add-wine">
                    <button className={styles.btnAddWine}>Lägg till vin</button>
                </Link>
            </article>
        </section>
    )
}