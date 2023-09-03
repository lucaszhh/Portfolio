import React from "react";
import proyectsjson from "../../database/proyects.json";
import Proyect from "./Proyect";

const Proyects = () => {
  const proyects = proyectsjson.map( proyect => <Proyect key={proyect.id} proyect={proyect}/>);

  return (
    <div className="portfolio" id="portfolio">
      <h2 className="portafolio-titulo">Portfolio</h2>
      {proyects}
    </div>
  );
};

export default Proyects;
