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
const tes = async ()=>{
  const response = await fetch("http://localhost:3003/user/getuser/1",{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  })
  const data = await response.json();
  console.log(data);
}
  return (
    <div className={classes.app}>
      <h1 className="" onClick={tes}>{ctr}</h1>
    </div>
  );
}

export default App;
