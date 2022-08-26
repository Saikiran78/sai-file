import React, { createContext ,useState} from "react";
import './App.css';
import Firstdata from "./ContextAPI/Firstdata";
import Seconddata from "./ContextAPI/Seconddata";
//import Webapp from "./Component/Webapp";
/*import Header from "./Component/Header";
import Navbar from './Component/Navbar';*/
//import Myapi from "./Navbar/Myapi.js";


export const store=createContext();
function App() {
  const [data]=useState([
    {name:'sai'},
    {name:'suma'},
    {name:'arun'}
  ])
  return (
    <div className="text-center">
      <React.Fragment>
      <store.Provider value={[data]} >
      <Firstdata />
      <Seconddata />
      </store.Provider>
      </React.Fragment>
      </div>
  );
}

export default App;



