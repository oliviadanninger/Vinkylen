import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import lockSymbol from "../img/lockSymbol.svg";
import chosenWineGrapes from "../img/chosenWineGrapes.svg";
import chosenWineFlag from "../img/chosenWineFlag.svg";
import flagItaly from "../img/flagItaly.svg";
import flagDefault from "../img/flagDefault.svg";
import flagUSA from "../img/flagUSA.svg";
import flagFrance from "../img/flagFrance.svg";
import flagChile from "../img/flagChile.svg";
import flagArgentina from "../img/flagArgentina.svg";
import flagSpain from "../img/flagSpain.svg";
import flagAustralia from "../img/flagAustralia.svg";
import flagGermany from "../img/flagGermany.svg";
import flagSouthAfrica from "../img/flagSouthAfrica.svg";
import flagPortugal from "../img/flagPortugal.svg";
import flagHungary from "../img/flagHungary.svg";
import flagNewZealand from "../img/flagNewZealand.svg";
import flagSlovakia from "../img/flagSlovakia.svg";
import flagSlovenia from "../img/flagSlovenia.svg";
import flagCzechRepublic from "../img/flagCzechRepublic.svg";

export default function ProductCard(props) {

    const wine = props.wine;
    let flag = "";
    flagHandler()


    function flagHandler() {
        switch (wine.country) {
            case "Italien":
                flag = flagItaly
                break;
            case "Frankrike":
                flag = flagFrance
                break;
            case "Spanien":
                flag = flagSpain
                break;
            case "USA":
                flag = flagUSA
                break;
            case "Argentina":
                flag = flagArgentina
                break;
            case "Chile":
                flag = flagChile
                break;
            case "Australien":
                flag = flagAustralia
                break;
            case "Tyskland":
                flag = flagGermany
                break;
            case "Sydafrika":
                flag = flagSouthAfrica
                break;
            case "Portugal":
                flag = flagPortugal
                break;
            case "Ungern":
                flag = flagHungary
                break;
            case "Nya Zealand":
                flag = flagNewZealand
                break;
            case "Österrike":
                flag = chosenWineFlag
                break;
            case "Slovakien":
                flag = flagSlovakia
                break;
            case "Slovenien":
                flag = flagSlovenia
                break;
            case "Tjeckien":
                flag = flagCzechRepublic
                break;
            default:
                flag = flagDefault
        }
    }

    return (
        <Link state={wine} to="/chosen-wine">
            <article className={styles.productCard}>
                <section className={styles.container}>
                    <img className={styles.wineImg} src={wine.image}></img>

                    <article className={styles.info}>
                        <article>
                            <h4>{wine.producer}</h4>
                            <h3>{wine.name}</h3>
                            <h4>{wine.vintage}</h4>
                        </article>

                        <article className={styles.flexContainer}>
                            <img src={flag} alt="" />
                            <p>{wine.country}</p>
                        </article>

                        <article className={styles.flexContainer}>
                            <img src={chosenWineGrapes} alt="" />
                            <p>{wine.grapes}</p>
                        </article>
                    </article>
                </section>

                {wine.drinkAfter !== "" ? <img className={styles.symbol} src={lockSymbol} alt="" /> : null}

            </article>
        </Link>
    )
}