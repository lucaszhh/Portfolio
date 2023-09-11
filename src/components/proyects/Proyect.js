import React from "react";

const Proyect = ({proyect}) => {
  return (
    <div className="cardproyecto">
      <div className="imagenProyecto">
        <img src={proyect.img} className="img-proyecto" alt="Imagen proyecto" />
      </div>
      <div className="descriptionProyecto">
        <h2 className="nombreProyecto">{proyect.title}</h2>
        <p className="descripcionProyecto">{proyect.description}</p>
        <p>
          <a className="verMas" href={proyect.host} target="_blank" rel="noreferrer">
            Show more ...
          </a>
        </p>
      </div>
    </div>
  );
};

export default Proyect;
