import { React, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { actions } from "../reducers/reducer"; 
import { useDispatch } from "react-redux";
import styles from "./ChosenWine.module.css";
// SVG
import editSymbol from "../img/editSymbol.svg";
import chosenWineGrapes from "../img/chosenWineGrapes.svg";
import chosenWineFlag from "../img/chosenWineFlag.svg";
import chosenWineBottle from "../img/chosenWineBottle.svg";
import chosenWinePercentage from "../img/chosenWinePercentage.svg";
import chosenWineCoins from "../img/chosenWineCoins.svg";
import lockSymbol from "../img/lockSymbol.svg";
import chosenWineBottles from "../img/chosenWineBottles.svg";
import chosenWineInfo from "../img/chosenWineInfo.svg";
import chosenWineHttp from "../img/chosenWineHttp.svg";
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

export default function ChosenWine() {

    const location = useLocation();
    const dispatch = useDispatch();
    const wine = location.state;
    const [showInputs, setShowInputs] = useState(false);
    let flag = "";
    flagHandler();

    // Sätter först state till data från useLocation
    let [editedWine, setEditedWine] = useState({
        "id": wine.id,
        "name": wine.name,
        "producer": wine.producer,
        "vintage": wine.vintage,
        "price": wine.price,
        "type": wine.type,
        "grapes": wine.grapes,
        "country": wine.country,
        "region": wine.region,
        "volume": wine.volume,
        "abv": wine.abv,
        "drinkAfter": wine.drinkAfter,
        "info": wine.info,
        "vivino": wine.vivino,
        "amount": wine.amount,
        "image": wine.image
    });

    // Funktion som tar bort vinet från store
    const dispatchActionRemove = () => {

        if (editedWine.amount > 1 ) {
            dispatch(actions.editAmount(editedWine))
        }
        else {
            dispatch(actions.remove(wine))
        }
    }

    // Funktion som togglar mellan att visa info / inputfält
    function toggleEdit() {
        setShowInputs(!showInputs);
    }

     // Funktion som redigerar vinet i store
     const dispatchActionEdit = () => {dispatch(actions.edit(editedWine))}

    // Funktion kopplad till edit-knapp som sparar ändringar i store och togglar tillbaka till info
    function saveAndEdit() {
        toggleEdit();
        dispatchActionEdit();
    }

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

    return(
        <section className={styles.chosenWineContainer}>

            <section className={showInputs ? styles.hideInputs : styles.showInputs}>
                <section className={styles.flexContainer}>

                    <article className={styles.topGrid}>
                        <article>
                            <h3>{editedWine.producer}</h3>
                            <h2>{editedWine.name}</h2>
                            <h3>{editedWine.vintage}</h3>
                        </article>

                        <img className={styles.editBtn} src={editSymbol} onClick={toggleEdit}></img>
                    </article>

                    <article className={styles.middleGrid}>
                        <img src={editedWine.image}></img>

                        <article>
                            <section className={styles.symbolContainer}>
                                <img src={chosenWineGrapes}></img>
                                <h4>{editedWine.grapes}</h4>
                            </section>
                            
                            <section className={styles.symbolContainer}>
                                <img src={flag}></img>
                                <article>
                                    <h4>{editedWine.country}</h4>
                                    <h4>{editedWine.region}</h4>
                                </article>
                            </section>

                            <section className={styles.symbolContainer}>
                                <img src={chosenWineBottle}></img>
                                <h4>{editedWine.volume} ml</h4>
                            </section>

                            <section className={styles.symbolContainer}>
                                <img src={chosenWinePercentage}></img>
                                <h4>{editedWine.abv} %</h4>
                            </section> 
                        </article>
                    </article>

                    <article className={styles.bottomFlex}>
                        <section className={styles.symbolContainer}>
                            <img src={chosenWineCoins}></img>
                            <h4>{editedWine.price} kr</h4>
                        </section>

                        <section className={styles.symbolContainer}>
                            <img src={lockSymbol}></img>
                            <h4>{ editedWine.drinkAfter === "" ? "Behöver ej lagras." : ("Får drickas efter " + wine.drinkAfter) }</h4>
                        </section>

                        <section className={styles.symbolContainer}>
                            <img src={chosenWineBottles}></img>
                            <h4>{editedWine.amount} st</h4>
                        </section>

                        <section className={styles.infoContainer}>
                            <img src={chosenWineInfo}></img>
                            <h4>{editedWine.info}</h4>
                        </section>

                        <section className={styles.symbolContainer}>
                            <img src={chosenWineHttp}></img>
                            <a href={editedWine.vivino}><span>Ta en titt på vivino!</span></a>
                        </section>
                    </article>

                    <Link to="/">
                        <button onClick={dispatchActionRemove}>Drick / Ta bort</button>
                    </Link>
                </section>
            </section>

          <section className={showInputs ? styles.showInputs : styles.hideInputs}>
                <section className={styles.inputContainer}>
                
                    <article>                                                         
                        <label htmlFor="producer">Producent</label>
                        <input type="text" id="producer" defaultValue={editedWine.producer} onChange={({ target: { value } }) => setEditedWine({ ...editedWine, producer: value })}></input>
                    </article>

                    <article>
                        <label htmlFor="name">Namn</label>
                        <input type="text" id="name" defaultValue={editedWine.name} onChange={({ target: { value } }) => setEditedWine({ ...editedWine, name: value })}></input>
                    </article>

                    <article>
                        <label htmlFor="name">Årgång</label>
                        <input type="number" id="vintage" defaultValue={editedWine.vintage} onChange={({ target: { value } }) => setEditedWine({ ...editedWine, vintage: value })}></input>
                    </article>

                    <article>
                        <label htmlFor="type">Vintyp</label>
                        <select id="type" defaultValue={editedWine.type} onChange={({ target: { value } }) => setEditedWine({ ...editedWine, type: value })}>
                            <option label="Rött">Rött</option>
                            <option label="Vitt">Vitt</option>
                            <option label="Rosé">Rosé</option>
                            <option label="Orange">Orange</option>
                            <option label="Bubbel">Bubbel</option>
                            <option label="Pet nat">Pet nat</option>
                        </select>
                    </article>

                    <article>
                        <label htmlFor="grapes">Druvor</label>
                        <input type="text" id="grapes" defaultValue={editedWine.grapes} onChange={({ target: { value } }) => setEditedWine({ ...editedWine, grapes: value })}></input>
                    </article>

                    <article>
                        <label htmlFor="country">Land</label>
                        <input type="text" id="country" defaultValue={editedWine.country} onChange={({ target: { value } }) => setEditedWine({ ...editedWine, country: value })}></input>
                    </article>

                    <article>
                        <label htmlFor="region">Region</label>
                        <input type="text" id="region" defaultValue={editedWine.region} onChange={({ target: { value } }) => setEditedWine({ ...editedWine, region: value })}></input>
                    </article>

                    <article>
                        <label htmlFor="volume">Volym (ml)</label>
                        <input type="number" id="volume" defaultValue={editedWine.volume} onChange={({ target: { value } }) => setEditedWine({ ...editedWine, volume: value })}></input>
                    </article>

                    <article>
                        <label htmlFor="abv">Alcohol (%)</label>
                        <input type="number" id="abv" defaultValue={editedWine.abv} onChange={({ target: { value } }) => setEditedWine({ ...editedWine, abv: value })}></input>
                    </article>

                    <article>
                        <label htmlFor="price">Pris (kr)</label>
                        <input type="number" id="price" defaultValue={editedWine.price} onChange={({ target: { value } }) => setEditedWine({ ...editedWine, price: value })}></input>
                    </article>

                    <article>
                        <label htmlFor="drinkAfter">Lagras till</label>
                        <input type="date" id="drinkAfter" defaultValue={editedWine.drinkAfter} onChange={({ target: { value } }) => setEditedWine({ ...editedWine, drinkAfter: value })}></input>
                    </article>

                    <article>
                        <label htmlFor="amount">Antal</label>
                        <input type="number" id="amount" defaultValue={editedWine.amount} onChange={({ target: { value } }) => setEditedWine({ ...editedWine, amount: value })}></input>
                    </article>

                    <article>
                        <label htmlFor="info">Info</label>
                        <input type="text" id="info" defaultValue={editedWine.info} onChange={({ target: { value } }) => setEditedWine({ ...editedWine, info: value })}></input>
                    </article>

                    <article>
                        <label htmlFor="vivino">Vivinolänk</label>
                        <input type="text" id="vivino" defaultValue={editedWine.vivino} onChange={({ target: { value } }) => setEditedWine({ ...editedWine, vivino: value })}></input>
                    </article>

                    <button onClick={saveAndEdit}>Spara</button>
                </section>
            </section> 

        </section>
    )
}