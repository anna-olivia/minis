import Mini from "./Mini.jsx";
import classes from "../styles/Main.module.css";
import Header from './Header.jsx'

const Solutions = () => {
  const minis = [
    { title: "Mini-", number: 1 },
    { title: "Mini-", number: 2 },
    { title: "Mini-", number: 3 },
    { title: "Mini-", number: 4 },
    { title: "Mini-", number: 5 },
    { title: "Mini-", number: 6 },
  ];
  
  return (
    <>
      <Header />
      <div className={classes.main}>
       {
minis.map((mini)=> (<Mini key={mini.number} title={`${mini.title}${mini.number}`} number={mini.number}/>))
       }
          
             </div>
    </>
  );
};

export default Solutions;
