import Mini1 from "./Mini1";
import Mini2 from "./Mini2";
import Mini3 from "./Mini3";
import Mini4 from "./Mini4";
import Mini5 from "./Mini5";
import Mini6 from "./Mini6";
import classes from "../styles/Main.module.css";
import { Outlet } from "react-router-dom";

const MiniProjects = () => {
  return (
    <>
      <Outlet />
      <div className={classes.main}>
        <Mini1 title="Mini-1"/>
        <Mini2 title="Mini-2"/>
        <Mini3 title="Mini-3"/>
        <Mini4 title="Mini-4"/>
        <Mini5 title="Mini-5"/>
        <Mini6 title="Mini-6"/>
      </div>
    </>
  );
};

export default MiniProjects;
