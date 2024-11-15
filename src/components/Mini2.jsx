import ExtensionIcon from '@mui/icons-material/Extension';
import classes from '../styles/Minis.module.css'
import { Link } from 'react-router-dom';
const Mini2 = () => {
    return (
        <div className={classes.minis}>
<Link to="/task2">
            <figure>
                <ExtensionIcon className="muiIcons"/>
                <figcaption>
                    <h2>Mini-2</h2>
                    </figcaption>
            </figure>
            </Link>
        </div>
    )
};

export default Mini2;