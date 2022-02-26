import { useEffect, useState } from "react";
import classes from "./App.module.css"

const App = ()=> {
  const [ctr,getCtr] = useState(1);
  useEffect(()=>{
    document.title = "Travelist"
},[]);
  const updateCtr = ()=>{
    getCtr(ctr + 1);
  }

  return (
    <div className={classes.app}>
      <h1 className="" onClick={updateCtr}>{ctr}</h1>
    </div>
  );
}

export default App;
