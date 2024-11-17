import ExtensionIcon from '@mui/icons-material/Extension';
import classes from '../styles/Minis.module.css';
import { Link } from 'react-router-dom';

const Mini = ({title, number}) => {
    return (
        <div className={classes.minis}>
     
     <Link to={`/task${number}`}>
            <figure>
                <ExtensionIcon className="muiIcons"/>
                <figcaption>
                    <h2>{title}</h2>
                    </figcaption>
            </figure>
            </Link>
        </div>
    )
}

export default Mini;