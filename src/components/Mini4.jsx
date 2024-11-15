import ExtensionIcon from '@mui/icons-material/Extension';
import classes from '../styles/Minis.module.css'

const Mini4 = () => {
    return (
        <div className={classes.minis}>
            <figure>
                <ExtensionIcon className="muiIcons"/>
                <figcaption>
                    <h2>Mini-4</h2>
                    </figcaption>
            </figure>
        </div>
    )
};

export default Mini4;