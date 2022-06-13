import React from 'react'

const Services = () => {
  return (
    <div class="services" id="service">
        <h2 class="tituloservice">Services</h2>
        <div class="contenedorCards">
            <div class="card">
                <i class="fa-solid fa-briefcase"></i>
                <p class="textoCard">web development using various programming languages</p>
            </div>
            <div class="card">
                <i class="fa-solid fa-bong"></i>
                <p class="textoCard">web page design and development of site functionality to meet user needs.</p>
            </div>
            <div class="card">
                <i class="fa-solid fa-brain"></i>
                <p class="textoCard">development of new functionalities to an existing web page</p>
            </div>
        </div>
    </div>
  )
}

export default Services