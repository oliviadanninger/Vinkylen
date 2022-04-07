import React from "react";
import ProductCardSmall from '../Components/ProductCardSmall';
import { useSelector} from 'react-redux';
import h1AllWines from "../img/h1AllWines.svg";
import styles from "./AllWines.module.css";

export default function AllWines() {

// useSelector() allows you to extract data from the Redux store state, using a selector function.
const wines = useSelector((state) => state.reducers);
const winesAmount = useSelector((state) => (state.reducers).length);

    return(
        <section className={styles.allWinesContainer}>
            <article className="h1Container">
                <img src={h1AllWines}></img>
                <h1>All Wines ({winesAmount})</h1>
            </article>

                {wines.map((wine, id) => (
                    <ProductCardSmall wine={wine} key={id}/>
                ))}
        </section>
    )
}