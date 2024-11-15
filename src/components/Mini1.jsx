import ExtensionIcon from '@mui/icons-material/Extension';
import classes from '../styles/Minis.module.css';
import { Link } from 'react-router-dom';


const Mini1 = () => {
    return (
        <div className={classes.minis}>
     
     <Link to="/project1">
            <figure>
                <ExtensionIcon className="muiIcons"/>
                <figcaption>
                    <h2>Mini-1</h2>
                    </figcaption>
            </figure>
            </Link>
        </div>
    )
};

export default Mini1;