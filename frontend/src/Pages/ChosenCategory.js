import React from "react";
import ProductCard from '../Components/ProductCard.jsx';
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./ChosenCategory.module.css";
import red from '../img/red.svg';
import rosé from '../img/rosé.svg';
import orange from '../img/orange.svg';
import white from '../img/white.svg';
import sparkling from '../img/sparkling.svg';
import petNat from '../img/petNat.svg';

export default function ChosenCategory() {

    const wines = useSelector((state) => state.reducers);
    const location = useLocation();
    const wineType = location.state;
    const chosenTypeArr = wines.filter(wine => wine.type === wineType);
    let typeImg = "";
    imgHandler();

    function imgHandler() {
        switch (wineType) {
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

    return(
        <section className={styles.chosenCategoryContainer}>

            <article className="h1Container">
                <img className={styles.typeImg} src={typeImg}></img>
                <h1>{wineType}</h1>
            </article>

                {chosenTypeArr.map((wine, id) => (
                    <ProductCard wine={wine} key={id}/>
                ))}
        </section>
    )
}