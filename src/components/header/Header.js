import React from 'react'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header>
            <div className="header">
                <h2 className="titulo"><a href="#top" onClick={() => navigate("/")}>Lucas Zarandón</a></h2>
                <nav>
                    <ul className="nav paginas">
                        <li><a href="#top" onClick={() => navigate("/service")}>Services</a></li>
                        <li><a href="#top" onClick={() => navigate("/portfolio")}>Portfolio</a> </li>
                        <li><a href="#top" onClick={() => navigate("/contact")}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
  )
}


export default Header;
