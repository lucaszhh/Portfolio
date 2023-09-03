import React from 'react'
import servicesjson from "../../database/service.json"
import Service from './Service';


const Services = () => {
    const services = servicesjson.map( service => <Service key={service.id} service={service}/>);
  return (
    <div className="services" id="service">
        <h2 className="tituloservice">Services</h2>
        <div className="contenedorCards">
            {services}
        </div>
    </div>
  )
}

export default Services