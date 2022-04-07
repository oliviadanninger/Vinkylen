import React from "react";
import styles from "./Modal.module.css";
import { Link } from "react-router-dom";

export default function Modal({ showModal }) {

    function refreshPage() {
        window.location.reload(false);
      }

    if (showModal) {
        return (
            <section className={styles.overlay}>
                <article className={styles.modal}>
                    <h2>Vinet har nu lagts till i vinkylen!</h2>
                    <article>
                        <button onClick={() => window.location.reload(false)}>Lägg till nytt vin</button>
                        <Link to="/"><button>OK</button></Link>
                    </article>
                </article>
            </section>)
    } else {
        return null;
    }
}