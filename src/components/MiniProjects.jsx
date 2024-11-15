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
        <Mini1 />
        <Mini2 />
        <Mini3 />
        <Mini4 />
        <Mini5 />
        <Mini6 />
      </div>
    </>
  );
};

export default MiniProjects;
