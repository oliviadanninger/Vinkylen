import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import backSymbol from '../img/backSymbol.svg';
import logo from '../img/logo.svg';
import searchSymbolWhite from '../img/searchSymbolWhite.svg';
import styles from "./Header.module.css";

export default function Header() {

    const navigate = useNavigate();
    
    return(
        <header>
            <section>
                {
                <img src={backSymbol} onClick={() => navigate(-1)}></img>
                }

                <Link to="/">
                    <img src={logo}></img>
                </Link>

                <Link to="/search-page">
                    <img src={searchSymbolWhite}></img>
                </Link>
            </section>
        </header>
    )
}


  

