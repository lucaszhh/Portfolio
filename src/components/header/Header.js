import React from 'react'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header>
            <div class="header">
                <h2 class="titulo"><a href="#top" onClick={() => navigate("/")}>Lucas Zarandón</a></h2>
                <nav>
                    <ul class="nav paginas">
                        <li><a href="#service" onClick={() => navigate("/service")}>Services</a></li>
                        <li><a href="#portfolio" onClick={() => navigate("/portfolio")}>Portfolio</a> </li>
                        <li><a href="#contact" onClick={() => navigate("/contact")}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
  )
}


export default Header;
