import React from "react";
import { Link } from "react-router-dom";
import styles from './ProductCardSmall.module.css';
import red from '../img/red.svg';
import rosé from '../img/rosé.svg';
import orange from '../img/orange.svg';
import white from '../img/white.svg';
import sparkling from '../img/sparkling.svg';
import petNat from '../img/petNat.svg';

export default function ProductCardSmall(props) {

    const wine = props.wine;
    let typeImg = "";
    imgHandler();

    function imgHandler() {
        switch (wine.type) {
            case "Rött":
                typeImg = red
                break;
            case "Rosé":
                typeImg = rosé
                break;
            case "Orange":
                typeImg = orange
                break;
            case "Vitt":
                typeImg = white
                break;
            case "Bubbel":
                typeImg = sparkling
                break;
            case "Pet nat":
                typeImg = petNat
                break;
            default:
                console.log('Matchar ingen vintyp');
        }
    }

    return (
        <Link state={wine} to="/chosen-wine">
            <article className={styles.productCardSmall}>
                <img className={styles.wineImg} src={wine.image}></img>

                <article>
                    <h4>{wine.producer}</h4>
                    <h3>{wine.name}</h3>
                    <h4>{wine.vintage}</h4>
                </article>

                <img className={styles.typeImg} src={typeImg}></img>
            </article>
        </Link>
    )
}