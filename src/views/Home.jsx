import React from 'react'
import Banner from '../components/banner/Banner'
import Proyects from '../components/proyects/Proyects'
import Services from '../components/service/Services'

const Home = () => {
  return (
    <main>
        <Banner/>
        <Services/>
        <Proyects/>
    </main>
  )
}


export default Home;