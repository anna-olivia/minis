import Mini1 from "./Mini1";
import Mini2 from "./Mini2";
import Mini3 from "./Mini3";
import Mini4 from "./Mini4";
import Mini5 from "./Mini5";
import Mini6 from "./Mini6";
import classes from "../styles/Main.module.css";
import Header from './Header.jsx'

const Solutions = () => {
  return (
    <>
      <Header />
      <div className={classes.main}>
        <Mini1 title="Solution 1"/>
        <Mini2 title="Solution 2"/>
        <Mini3 title="Solution 3"/>
        <Mini4 title="Solution 4"/>
        <Mini5 title="Solution 5"/>
        <Mini6 title="Solution 6"/>
      </div>
    </>
  );
};

export default Solutions;
