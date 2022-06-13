import React from 'react'

const Proyects = () => {
  return (
    <div class="portfolio" id="portfolio">
            <h2 class="portafolio-titulo">Portfolio</h2>
            <div class="cardproyecto">
                <div class="imagenProyecto">
                    <img src="./img/casitaDelFuturo.png" class="img-proyecto" alt="Imagen proyecto"/>
                </div>
                <div class="descriptionProyecto">
                    <h2 class="nombreProyecto">Web Page - Casa del Futuro (2020)</h2>
                    <p class="descripcionProyecto">Project developed in the "Casa del Futuro" in conjunction with Lucas
                        Trubiano, using HTML, CSS y Javascript lenguages</p>
                    <p><a class="verMas" href="https://casadelfuturo.netlify.app/" target="_blank">Show more ...</a></p>
                </div>
            </div>
        </div>
  )
}

export default Proyects