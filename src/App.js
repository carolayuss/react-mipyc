import React from 'react'
import Accesorio from './componentes/Accesorio'
import './App.css'
import Navbar from './componentes/Navbar'
import Newsletter from './componentes/Newsletter'
import Visual from './componentes/Visual'
import Footer from './componentes/Footer'


const App = () => {
  return (
    <div>
      
      <Navbar/>
      <Accesorio/>
      <Newsletter/>
      <Visual/>
      <Footer/>
      

    </div>
  )
}

export default App
