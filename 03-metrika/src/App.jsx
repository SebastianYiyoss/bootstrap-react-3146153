import React from 'react'
import Iconos from './components/Iconos'
import Tarjeta from './components/Tarjeta'
import './stylesheets/colors.css'

const App = () => {
  return (
    <section style={{width: '100%', height:'70vh'}} className='d-flex flex-column justify-content-evenly'>
      <div style={{width: '90%'}} className='d-flex justify-content-end gap-2'>
        <Iconos
        icono='./sources/Face.png' />
        <Iconos
        icono='./sources/Twitt.png' />
        <Iconos
        icono='./sources/g+.png' />
        <Iconos
        icono='./sources/in.png' />
        <Iconos
        icono='./sources/Foco.png' />
      </div>
      <div className="container text-center text-light">
        <div className="row gap-3">

          <div className="col d-flex flex-column gap-4">

            <div className='d-flex gap-4'>
              <div className='bg-blue-op d-flex flex-column justify-content-end align-items-center gap-4 p-2' style={{width:'25vh', height:'25vh'}}>
                <Tarjeta
                  tamañoImagen='36%'
                  imagen='./sources/Libro.png'
                  texto='About Us' />
              </div>
              <div className='bg-green d-flex flex-column justify-content-end align-items-center gap-4 p-2' style={{width:'25vh', height:'25vh'}}>
                <Tarjeta
                tamañoImagen='35%'
                imagen='./sources/Loquer.png'
                texto='Our Team' />
              </div>
            </div>
            <div className='bg-red-op d-flex flex-column justify-content-end align-items-center gap-5 p-2' style={{width:'53.7vh', height:'25vh'}}>
              <Tarjeta
              tamañoImagen='13%'
              imagen='./sources/Descargar.png'
              texto='Resume' />
            </div>

          </div>

          <div className="col bg-blue d-flex flex-column justify-content-end align-items-center gap-10 p-2" style={{width:'53.7vh', height:'53.7vh'}}>

            <Tarjeta
              tamañoImagen='50%'
              imagen='./sources/Galeria.png'
              texto='Our Works' />

          </div>

          <div className="col d-flex flex-column gap-4">

            <div className='bg-violet d-flex flex-column justify-content-end align-items-center gap-4 p-2' style={{width:'53.7vh', height:'25vh'}}>
              <Tarjeta
              tamañoImagen='22%'
              imagen='./sources/Mapa.png'
              texto='Contacts' />
            </div>
            <div className='d-flex gap-4'>
              <div className='bg-brown d-flex flex-column justify-content-end align-items-center gap-4 p-2' style={{width:'25vh', height:'25vh'}}>
                <Tarjeta
                tamañoImagen='33%'
                imagen='./sources/Lapiz.png'
                texto='Blog' />
              </div>
              <div className='bg-orange d-flex flex-column justify-content-end align-items-center gap-4 p-2' style={{width:'25vh', height:'25vh'}}>
                <Tarjeta
                tamañoImagen='35%'
                imagen='./sources/Carta.png'
                texto='Feedback' />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default App
