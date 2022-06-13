import React from "react";
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

const HeaderFooterLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default HeaderFooterLayout;