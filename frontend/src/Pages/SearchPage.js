import React from "react";
import ProductCard from '../Components/ProductCard';
import { useSelector } from "react-redux";
import { useState } from "react";
import styles from './SearchPage.module.css';
import searchSymbolBlack from '../img/searchSymbolBlack.svg';

export default function SearchPage() {

    const wines = useSelector((state) => state.reducers);
    const [searchValue, setSearchValue] = useState("");

    return(
        <section>
            <section className={styles.searchContainer}>
                
                <article className={styles.h1Container}>
                    <img src={searchSymbolBlack}></img>
                    <h1>Sök</h1>
                </article>
                

                <article className={styles.inputContainer}>
                    <input type="text" placeholder='Sök efter vin, producent, druva...' onChange={({ target: { value } }) => setSearchValue(value)} />
                </article>
            </section>

            <section className={styles.wineContainer}>
                {wines.filter((wine) => {
                    if (searchValue === "") {
                        return wine
                    } else if (
                        wine.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                        wine.producer.toLowerCase().includes(searchValue.toLowerCase()) ||
                        wine.grapes.toLowerCase().includes(searchValue.toLowerCase()) ||
                        wine.country.toLowerCase().includes(searchValue.toLowerCase()) ||
                        wine.region.toLowerCase().includes(searchValue.toLowerCase()) ||
                        wine.vintage.toLowerCase().includes(searchValue.toLowerCase()) || 
                        wine.type.toLowerCase().includes(searchValue.toLowerCase()) 
                        ) {
                        return wine
                    }
                    })
                    .map((wine, id) => (
                        <ProductCard wine={wine} key={id} />
                ))}
            </section>
        </section>
    )
}