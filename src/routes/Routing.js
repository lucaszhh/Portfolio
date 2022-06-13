import { Routes, Route } from "react-router-dom";
import Home from "../views/Home"
import Service from "../views/Service"
import Portfolio from "../views/Portfolio"
import Designs from "../views/Desing"
import Contact from "../views/Contact"

import React from 'react'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default Routing;
