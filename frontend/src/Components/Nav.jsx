import React from "react";
import { Link } from 'react-router-dom';
import addSymbol from '../img/addSymbol.svg';
import categoriesSymbol from '../img/categoriesSymbol.svg';
import allWinesSymbol from '../img/allWinesSymbol.svg';
import styles from "./Nav.module.css";

export default function Nav() {

    return(
        <nav>
            <Link to="/add-wine">
                <article>
                <img src={addSymbol}></img>
                <h4>Lägg till</h4>
                </article>
            </Link>

            <Link to="/categories">
                <article>
                    <img src={categoriesSymbol}></img>
                    <h4>Kategorier</h4>
                </article>
            </Link>

            <Link to="/all-wines">
                <article>
                    <img src={allWinesSymbol}></img>
                    <h4>Alla viner</h4>
                </article>
            </Link>
        </nav>
    )
}