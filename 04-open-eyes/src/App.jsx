import React from 'react'
import TarjetaBlanca from '../components/TarjetaBlanca.jsx'
import Separacion from '../components/Separacion.jsx'
import TarjetaPich from '../components/TarjetaPich.jsx'
import './App.css'
import './JavaP.js'

const App = () => {
  return (
    <>
      <header className=' px-3 p-2 d-flex justify-content-between align-items-center fixed-top mt-1'>
        <div className='border bg-white border-black p-2 sec-1 d-flex gap-4 align-items-center justify-content-center rounded shadow' style={{ width: '20%' }}>
          <img src="../sources/Logo.png" alt="" style={{ width: '31%' }} />
          <h2 className='fs-6 text bg-black p-2 text-white rounded text-center m-0'>conoce la marca</h2>
        </div>
        <div style={{ width: '62%', height: '.1vh' }}></div>
        <div className='sec-1 bg-white d-flex gap-3 border border-black p-2 rounded shadow' style={{ width: '17%' }}>
          <img src="../sources/Abajo.svg" alt="" style={{ width: '14%' }} />
          <h2 className='fs-5 text border border-black bg-white rounded text-center p-1 m-0' style={{ width: '60%' }}>inicio</h2>
          <img src="../sources/Arriba.svg" alt="" style={{ width: '14%' }} />
        </div>
      </header>



      <section className='bg-rock-sky d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}>
        <h2 className='bg-secondary-ligth fs-6 p-3 position-absolute start-0 text-end rounded-end' style={{ width: '12%' }}>Proyecto multimedial<br />creador por<br />OPEN EYES</h2>
        <img className='cambio' src="./sources/Logo Comic.png" alt="" style={{ width: '50%' }} />
      </section>

      <Separacion />

      <section className='bg-rocks-lateral d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}>
        <div className='d-flex flex-column justify-content-center align-items-center gap-3 bg-white rounded p-5 shadow' style={{ width: '30%', height: '' }}>
          <TarjetaBlanca
            Titulo='Introducción'
            Texto='En esta página encontrarás todo lo relacionado con el comic, objetivos, PichBook e identidad de marca descargables, nuestra tienda, los personajes, el teaser ¡y lo más importante!, el comic interactivo.' />
        </div>
      </section>

      <Separacion />

      <section className='bg-rocks-lateral-2 d-flex flex-column align-items-center gap-5' style={{ width: '100%', height: '100vh' }}>
        <h2 className='fs-4 text-center mt-5 mb-3 text-brown'>PichBook Con Hoguera</h2>
        <div className='d-flex justify-content-center align-items-center gap-5'>
          <div className='d-flex gap-3 bg-body-black p-2 rounded shadow' style={{ width: '40%', height: '27vh' }}>
            <TarjetaPich
              Imagen='../sources/TarOne.png'
              Titulo='Idea'
              Parrafo='Desarrollar un proyecto
              multimedial para concenciar,
              entretener y enseñar acerca
              de las consecuencias del uso
              de la tecnología.
              
              Esto, teniendo como recurso
              principal una narrativa
              distópica que explora la
              supervivencia del ser humano
              en un mundo sin
              dispositivos electrónicos.' />
          </div>
          <div className='d-flex gap-3 bg-body-black p-2 rounded shadow' style={{ width: '40%', height: '27vh' }}>
            <TarjetaPich
              Imagen='../sources/TarTwo.png'
              Titulo='Problemas'
              Parrafo='Las personas no suelen
              interesarse por este tipo de
              temas los cuales ponen a
              juzgar su manera des ser, y
              para esto el comic será un
              consejo y no un regaño al
              espectador, también a la
              sociedad no les conviene que
              las personas dejen de lado sus
              productos, por esto fue creada
              esta marca. ' />
          </div>
        </div>
        <div className='d-flex justify-content-center align-items-center gap-5'>
          <div className='d-flex gap-3 bg-body-black p-2 rounded shadow' style={{ width: '40%', height: '27vh' }}>
            <TarjetaPich
              Imagen='../sources/TarThree.png'
              Titulo='Objetivo'
              Parrafo='El objetivo principal de este proyecto es concienciar a las personas de tener
              un mejor control de sus cuerpos y mente, que cambien su forma de vivir y pensar.

              Como primer objetivo específico está el crear este comic interactivo para que
              nuestros usuarios tomen conciencia de cómo llevan su vida.' />
          </div>
          <div className='d-flex flex-column justify-content-between bg-skin rounded shadow p-2' style={{ width: '40%', height: '15vh' }}>
            <h2 className='fs-5 text-center text-brown-2'>¡Conoce a profundidad el PichBook!</h2>
            <h2 className='fs-3 text-center text-skin bg-brown rounded m-0' style={{ width: '100%', height: '50%' }}>Descargar</h2>
          </div>
        </div>
        <div></div>
      </section>

      <Separacion />

      <section className='bg-rocks-up-down d-flex flex-column align-items-center' style={{ width: '100%', height: '100vh' }}>
        <h2 className='fs-4 text-center mt-5 mb-5 text-brown'>Pre - Vista   Comic Con Hoguera</h2>
        <div className='d-flex align-items-center justify-content-center gap-5'>
          <div style={{ width: '25%', height: '70vh' }}>
            <div className='bg-preview rounded shadow overflow-hidden p-4' style={{ width: '100%', height: '70vh' }}>
              <div className='bg-black text-white p-1 rounded opacity-50 text-center'>¡ Información del contenido !</div>
            </div>
          </div>
          <div className='bg-white-op d-flex flex-column justify-content-evenly align-items-center shadow rounded' style={{ width: '40%', height: '70vh'}}>
            <img src="../sources/Logo Comic.png" alt="" style={{ width: '50%'}}/>
            <p className='lh-lg text-secondary text-center' style={{ width: '90%'}}>Una serie de cientificos buscan la
              manera de saber la causa del
              deterioro del ser humano y para
              esto “reclutan” a tres personas
              con distintos hábitos de vida.
              <br />
              <br />
              Nuestros protagonistas tendrán
              que buscan la manera de
              sobrevivir en un ambiente
              distópico y llegar a un refugio
              de sobrevivientes.
              <br />
              ¿Qué tan capaz serías tu?</p>
            <h2 className='fs-4 bg-green text-green-light p-2 text-center rounded' style={{width:'90%'}}>Ver Comic</h2>
          </div>
        </div>
      </section>

      <Separacion />

      <section className='bg-rocks-brown d-flex flex-column align-items-center' style={{ width: '100%', height: '100vh' }}>
        <h2 className='fs-4 text-center mt-5 mb-5 text-green-light'>Teaser Con Hoguera</h2>
        <video src="" className='rounded shadow' controls style={{width:'70%', height:'70vh'}}></video>
      </section>

      <Separacion />

      <section className='bg-rocks-brown d-flex flex-column align-items-center' style={{ width: '100%', height: '100vh' }}>

      </section>
    </>
  )
}

export default App
