import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import classes from '../styles/Tasks.module.css'
const Task1 = ( ) => {
    const [price, setPrice] = useState(100);


    return(

        <>
        <Outlet/>
        <div className={classes.task1}>
            <h2>Task1</h2>
            <form>
                <div>
                <label htmlFor="">Preis der Ware in €</label>
                <input type="text" />
                </div>
                <div>
                <label htmlFor="">reduzierter Preis €</label>
                <input type="text" />
                </div>
                <div>
                <label htmlFor="">Reduktion in %</label>
                <input type="text" />
                </div>
                <div>
                <button type="submit">Reduzieren!</button>
                <button type="reset">Zurücksetzen</button>
                </div>
            </form>
        </div>
        </>
    );
}

export default Task1;