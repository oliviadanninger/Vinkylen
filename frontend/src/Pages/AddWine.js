import React from "react";
import styles from "./AddWine.module.css";
import { useState } from "react";
import { actions } from "../reducers/reducer";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Components/Modal";
import h1AddWine from "../img/h1AddWine.svg";

export default function AddWine() {

    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    
    // Försökte först sköta mina id:n på detta sättet men upptäckte att det kan bli buggar => BACKEND
    // const storeWines = useSelector((state) => state.reducers);
    // let nr = storeWines.length;
    // let lastId = storeWines[nr-1].id;
    // let newId = lastId + 1;

    let [wine, setWine] = useState(
        {
            "id": "",
            "name": "",
            "producer": "",
            "vintage": "",
            "price": "",
            "type": "Rött",
            "grapes": "",
            "country": "",
            "region": "",
            "volume": "",
            "abv": "",
            "drinkAfter": "",
            "info": "",
            "vivino": "",
            "amount": ""
        }
    )

    const dispatchActionAdd = () => {

        if (wine.name == "" || wine.producer == "" || wine.vintage == "" || wine.type == "" || wine.country == "" || wine.amount == "") {
            alert("Var god fyll i obligatoriska fält (märkta med *)")
        }
        else {
            // Lägger till nya vinet i store
            dispatch(actions.add(wine))

            // Modalen visas
            setShowModal(!showModal);
        }
    };


    return (
        <section className={styles.addWineContainer}>

            <Modal showModal={showModal} />

            <article className="h1Container">
                <img src={h1AddWine}></img>
                <h1>Add Wine</h1>
            </article>
           
       
            <article className={styles.form}>
                <form>
                    <article>
                        <label htmlFor="name">NAMN*</label>
                        <input className={styles.bigInput} type="text" id="name" onChange={({ target: { value } }) => setWine({ ...wine, name: value })}></input>
                    </article>

                    <article>
                        <label htmlFor="producer">PRODUCENT*</label>
                        <input className={styles.bigInput} type="text" id="producer" onChange={({ target: { value } }) => setWine({ ...wine, producer: value })}></input>
                    </article>

                    <section>
                        <article>
                            <label htmlFor="vintage">ÅRGÅNG*</label>
                            <input className={styles.smallInput} type="text" id="vintage" onChange={({ target: { value } }) => setWine({ ...wine, vintage: value })}></input>
                        </article>

                        <article>
                            <label htmlFor="amount">ANTAL*</label>
                            <select className={styles.smallInput} id="amount" onChange={({ target: { value } }) => setWine({ ...wine, amount: value })}>
                                <option label=""></option>
                                <option label="1">1</option>
                                <option label="2">2</option>
                                <option label="3">3</option>
                                <option label="4">4</option>
                                <option label="5">5</option>
                                <option label="6">6</option>
                            </select>
                        </article>
                    </section>

                    <article>
                        <label htmlFor="type">VINTYP*</label>
                        <select className={styles.selectInput} id="type" onChange={({ target: { value } }) => setWine({ ...wine, type: value })}>
                            <option label="Välj vintyp"></option>
                            <option label="Rött">Rött</option>
                            <option label="Vitt">Vitt</option>
                            <option label="Rosé">Rosé</option>
                            <option label="Orange">Orange</option>
                            <option label="Bubbel">Bubbel</option>
                            <option label="Pet nat">Pet nat</option>
                        </select>
                    </article>

                    <article>
                        <label htmlFor="country">LAND*</label>
                        <input className={styles.bigInput} type="text" id="country" onChange={({ target: { value } }) => setWine({ ...wine, country: value })}></input>
                    </article>

                    <article>
                        <label htmlFor="region">REGION</label>
                        <input className={styles.bigInput} type="text" id="region" onChange={({ target: { value } }) => setWine({ ...wine, region: value })}></input>
                    </article>

                    <article>
                        <label htmlFor="grapes">DRUVOR</label>
                        <input className={styles.bigInput} type="text" id="grapes" placeholder="Pinot noir, Gamay ..." onChange={({ target: { value } }) => setWine({ ...wine, grapes: value })}></input>
                    </article>

                    <section>
                        <article>
                            <label htmlFor="volume">VOLYM</label>
                            <input className={styles.xsInput} type="number" id="volume" placeholder="ml" onChange={({ target: { value } }) => setWine({ ...wine, volume: value })}></input>
                        </article>

                        <article>
                            <label htmlFor="abv">ALKOHOL</label>
                            <input className={styles.xsInput} type="number" id="abv" placeholder="%" onChange={({ target: { value } }) => setWine({ ...wine, abv: value })}></input>
                        </article>

                        <article>
                            <label htmlFor="price">PRIS</label>
                            <input className={styles.xsInput} type="text" id="price" placeholder="kr" onChange={({ target: { value } }) => setWine({ ...wine, price: value })}></input>
                        </article>
                    </section>

                    <article>
                        <label htmlFor="drink-after">LAGRAS TILL EFTER</label>
                        <input className={styles.bigInput} type="date" id="drink-after" onChange={({ target: { value } }) => setWine({ ...wine, drinkAfter: value })}></input>
                    </article>

                    <article>
                        <label htmlFor="info">INFO</label>
                        <textarea className={styles.infoInput} id="info" rows="10" wrap="soft" onChange={({ target: { value } }) => setWine({ ...wine, info: value })}></textarea>
                    </article>

                    <article>
                        <label htmlFor="vivino">VIVINO-LÄNK</label>
                        <input className={styles.bigInput} type="text" id="vivino" onChange={({ target: { value } }) => setWine({ ...wine, vivino: value })}></input>
                    </article>
                </form>

                <button onClick={dispatchActionAdd}>Lägg till vin</button>
            </article>
        </section>
    )
}