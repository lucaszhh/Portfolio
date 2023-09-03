import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card">
      <i className={service.icon}></i>
      <p className="textoCard">
        {service.description}
      </p>
    </div>
  );
};

export default Service;
