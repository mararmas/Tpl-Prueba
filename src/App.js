
import React, { Component } from "react";
import Botones from "./componentes/Botones";



class App extends Component {
render(){
  return(

    <div className="app container">
      <div className="jumbotron">
      <p className="lead text-center">Seleccione el territorrio</p>
      <Botones />


      </div>
      


    </div>
  
  );
}
}
export default App;
