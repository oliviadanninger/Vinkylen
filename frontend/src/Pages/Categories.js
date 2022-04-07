import React from "react";
import { Link } from 'react-router-dom';
import red from '../img/red.svg';
import rosé from '../img/rosé.svg';
import orange from '../img/orange.svg';
import white from '../img/white.svg';
import sparkling from '../img/sparkling.svg';
import petNat from '../img/petNat.svg';
import styles from './Categories.module.css';
import h1Categories from '../img/h1Categories.svg';


export default function Categories() {

    let types = [
        {
            type: 'Rött',
            img: red 
        },
        {
            type: 'Rosé',
            img: rosé        
        },
        {
            type: 'Orange',
            img: orange       
        },
        {
            type: 'Vitt',
            img: white       
        },
        {
            type: 'Bubbel',
            img: sparkling        
        },
        {
            type: 'Pet nat',
            img: petNat       
        }
    ];

    return(
        <section className={styles.categoriesContainer}>

            <article className="h1Container">
                <img src={h1Categories}></img>
                <h1>Categories</h1>
            </article>

            <section className={styles.flexContainer}>
                <section className={styles.gridContainer}>
                {
                    types.map((category, index) => (
                        <Link key={index} state={category.type} to="/chosen-category">
                            <article>
                                <img src={category.img}></img> 
                                <h3>{category.type}</h3>
                            </article>
                        </Link>
                    ))
                }
                </section>
            </section>

        </section>
    )
}