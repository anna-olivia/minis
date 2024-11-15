import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import classes from '../styles/Tasks.module.css';

const Task1 = ( ) => {
    const [price, setPrice] = useState("");
    const [ergebnis, setErgebnis] = useState("");
    const [prozent, setProzent] = useState("");

    

    const handleSubmit = (e) => {
        e.preventDefault();
        let result = price - (price * (prozent/100))
        setErgebnis(result);
        
    }

    const handleReset = () => {
        setErgebnis(0);
        setPrice("");
        setProzent("");
    }

    return(

        <>
        <Outlet/>
        <div className={classes.task}>
            <h2>Task1</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Preis der Ware in €</label>
                <input type="text" id="preis" onChange={(e)=>setPrice(e.target.value)} />
                </div>
               
                <div>
                <label>Reduktion in %</label>
                <input type="text" id="prozent" onChange={(e)=>setProzent(e.target.value)}/>
                </div>
                 
                <div>
                <button type="submit">Reduzieren!</button>
                <button type="reset" onClick={handleReset}>Zurücksetzen</button>
                </div>
                <h3>Ergebnis: {ergebnis} €</h3>
            </form>
            <div className={classes.link}>
                <Link to="/solutions/task1">Mögliche Lösung</Link>
            </div>
        </div>

        </>
    );
}

export default Task1;