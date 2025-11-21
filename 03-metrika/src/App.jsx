import React from 'react'
import Iconos from './components/Iconos'
import Tarjeta from './components/Tarjeta'
import './stylesheets/colors.css'

const App = () => {
  return (
    <section>
      <div className="container text-center">
        <div className="row">

          <div className="col">

            <div className='d-flex'>
              <Tarjeta 
              imagen='./sources/Libro.png'
              texto='About Us'
              color='bg-blue-op' />
              <Tarjeta
              imagen=''
              texto='Our Team'
              color='bg-green' />
            </div>
            <Tarjeta
            imagen=''
            texto='Resume'
            color='bg-red-op' />

          </div>

          <div className="col">

            <Tarjeta
            imagen=''
            texto='Our Works'
            color='bg-blue' />

          </div>

          <div className="col">

            <Tarjeta
            imagen=''
            texto='Contacts'
            color='bg-violet' />
            <div className='d-flex'>
              <Tarjeta 
              imagen=''
              texto='Blog'
              color='bg-brown' />
              <Tarjeta
              imagen=''
              texto='Feedback'
              color='bg-orange' />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
