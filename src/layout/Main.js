import React from 'react'
import Banner from '../components/banner/Banner'
import Proyects from '../components/proyects/Proyects'
import Services from '../components/service/Services'
import Form from '../components/contact/Form'


const Main = () => {
  return (
    <main>
        <Banner/>
        <Services/>
        <Proyects/>
        <Form/>
    </main>
  )
}

export default Main