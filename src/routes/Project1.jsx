import { Outlet } from 'react-router-dom';
import classes from '../styles/Main.module.css'

const Project1 = ( ) => {
    return(
        <>
        <Outlet/>
        <div className={classes.main}>
            <h2>Project1</h2>
        </div>
        </>
    );
}

export default Project1;