import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <h3 className="titulofooter">You can also contact me through my Social Networks</h3>
            <div className="iconos menu">
                <a href="https://www.linkedin.com/in/lucas-zarandon/" target="_blank">
                    <span><i className="fa-brands fa-linkedin iconfooter"></i></span>
                    <span>Linkedin</span>
                </a>
                <a href="mailto:lucaszarandon24@gmail.com?Subject=Vi%20tu%20portfolio%20y%20estoy%20interesado%20en%20tus%20servicios%20..." target="_blank">
                    <span><i className="fa-solid fa-at iconfooter"></i></span>
                    <span >lucaszarandon24@gmail.com </span>
                    
                </a>
                <a href="https://github.com/lucaszhh" target="_blank">
                    <span><i className="fa-brands fa-github-square iconfooter"></i></span>
                    <span>GitHub</span>
                </a>
            </div>
        </div>
        <div className="derechos">
            <p>made with ♥ by kq</p>
        </div>
    </footer>
  )
}

export default Footer;