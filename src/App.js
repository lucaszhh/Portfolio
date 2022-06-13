import React from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderFooterLayout from "./layout/HeaderFooterLayout";
import Routing from "./routes/Routing";

import "../src/styles/style.css"
import "../src/styles/styleresposive.css"


function App() {

  return(
    <BrowserRouter>
      <HeaderFooterLayout children={<Routing />} />
    </BrowserRouter>
  )
}

export default App;

