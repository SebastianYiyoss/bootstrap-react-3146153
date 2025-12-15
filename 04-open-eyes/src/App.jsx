import React from 'react'
import TarjetaBlanca from '../components/TarjetaBlanca.jsx'
import Separacion from '../components/Separacion.jsx'
import TarjetaPich from '../components/TarjetaPich.jsx'
import Personajes from '../components/Personajes.jsx'
import TarjetaNegra from '../components/TarjetaNegra.jsx'
import './App.css'
import './JavaP.js'
import '../styles/MediaQ.css'

const App = () => {
  return (
    <>
      <header className='px-3 p-2 d-flex justify-content-center justify-content-md-between align-items-center fixed-top mt-1' style={{width:'100%'}}>
        <div className='container-H-OP border bg-white border-black p-2 sec-1 d-flex gap-4 align-items-center justify-content-evenly justify-content-md-center rounded shadow'>
          <img className='container-H-LG' src="../sources/Logo.png" alt="" />
          <h2 className='fs-6 text bg-black p-2 text-white rounded text-center m-0'>conoce la marca</h2>
          <img className='d-flex d-md-none' src="./sources/Barra.png" alt="" style={{width:'6%'}} />
        </div>
        <div className='container-line d-none d-md-flex'></div>
        <div className='container-sections sec-1 bg-white d-none d-md-flex gap-3 border border-black p-2 rounded shadow'>
          <img src="../sources/Abajo.svg" alt="" style={{ width: '14%' }} />
          <h2 className='fs-5 text border border-black bg-white rounded text-center p-1 m-0' style={{ width: '60%' }}>inicio</h2>
          <img src="../sources/Arriba.svg" alt="" style={{ width: '14%' }} />
        </div>
      </header>



      <section className='bg-rock-sky d-flex gap-5 gap-md-0 flex-column-reverse flex-md-row justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}>
        <h2 className='container-I-T bg-secondary-ligth fs-6 p-3 position-absolute start-0 text-end rounded-end'>Proyecto multimedial<br />creador por<br />OPEN EYES</h2>
        <img className='cambio container-I-I' src="./sources/Logo Comic.png" alt="" />
      </section>

      <Separacion />

      <section className='bg-rocks-lateral d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}>
        <div className='container-I-Tarjet d-flex flex-column justify-content-center align-items-center gap-3 bg-white rounded p-5 shadow'>
          <TarjetaBlanca
            Titulo='Introducción'
            Texto='En esta página encontrarás todo lo relacionado con el comic, objetivos, PichBook e identidad de marca descargables, nuestra tienda, los personajes, el teaser ¡y lo más importante!, el comic interactivo.' />
        </div>
      </section>

      <Separacion />

      <section className='container-Pich bg-rocks-lateral-2 d-flex flex-column align-items-center gap-5'>
        <h2 className='fs-4 text-center mt-5 mb-3 text-brown'>PichBook Con Hoguera</h2>
        <div className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-5'>
          <div className='container-P-TarjetWhite d-flex justify-content-center align-items-center gap-3 bg-body-black p-2 rounded shadow'>
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
          <div className='container-P-TarjetWhite d-flex justify-content-center align-items-center gap-3 bg-body-black p-2 rounded shadow'>
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
        <div className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-5'>
          <div className='container-P-TarjetWhite d-flex gap-3 justify-content-center align-items-center bg-body-black p-2 rounded shadow'>
            <TarjetaPich
              Imagen='../sources/TarThree.png'
              Titulo='Objetivo'
              Parrafo='El objetivo principal de este proyecto es concienciar a las personas de tener
              un mejor control de sus cuerpos y mente, que cambien su forma de vivir y pensar.

              Como primer objetivo específico está el crear este comic interactivo para que
              nuestros usuarios tomen conciencia de cómo llevan su vida.' />
          </div>
          <div className='container-P-Down d-flex flex-column justify-content-between bg-skin rounded shadow p-2'>
            <h2 className='fs-5 text-center text-brown-2'>¡Conoce a profundidad el PichBook!</h2>
            <h2 className='fs-3 text-center text-skin bg-brown rounded m-0' style={{ width: '100%', height: '50%' }}>Descargar</h2>
          </div>
        </div>
        <div></div>
      </section>

      <Separacion />

      <section className='container-PreVista bg-rocks-up-down d-flex flex-column align-items-center'>
        <h2 className='fs-4 text-center mt-5 mb-5 text-brown'>Pre - Vista   Comic Con Hoguera</h2>
        <div className='d-flex flex-column flex-md-row align-items-center justify-content-center gap-5'>
          <div className='container-C-Image'>
            <div className='container-C-Image-2 bg-preview rounded shadow overflow-hidden p-4'>
              <div className='bg-black text-white p-1 rounded opacity-50 text-center'>¡ Información del contenido !</div>
            </div>
          </div>
          <div className='container-C-Info bg-white-op d-flex flex-column justify-content-evenly align-items-center shadow rounded'>
            <img src="../sources/Logo Comic.png" alt="" style={{ width: '50%' }} />
            <p className='lh-lg fs-ajust text-secondary text-center' style={{ width: '90%' }}>Una serie de cientificos buscan la
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
            <h2 className='fs-4 bg-green text-green-light p-2 text-center rounded' style={{ width: '90%' }}>Ver Comic</h2>
          </div>
        </div>
      </section>

      <Separacion />

      <section className='container-Teaser bg-rocks-brown d-flex flex-column align-items-center'>
        <h2 className='fs-4 text-center mt-5 mb-5 text-green-light'>Teaser Con Hoguera</h2>
        <video src="" className='rounded shadow container-Video' controls></video>
      </section>

      <Separacion />

      <section className='container-Personajes bg-crater d-flex flex-column align-items-center'>
        <h2 className='fs-4 text-center mt-5 mb-5 text-brown'>Personajes</h2>
        <div className='container-TarjetsPer d-flex flex-column flex-md-row align-items-center gap-5 justify-content-evenly'>
          <Personajes
            Nombre='Kyle'
            Imagen='../sources/Kyle.png'
          />
          <Personajes
            Nombre='Alim'
            Imagen='../sources/Alim.png'
          />
          <Personajes
            Nombre='Jimbo'
            Imagen='../sources/Jimbo.png'
          />
          <Personajes
            Nombre='Maggie'
            Imagen='../sources/Maggie.png'
          />
          <Personajes
            Nombre='Petalo'
            Imagen='../sources/Petalo.png'
          />
        </div>
      </section>

      <Separacion />

      <section className='bg-grass d-flex flex-column align-items-center justify-content-center' style={{ width: '100%', height: '70vh' }}>
        <h2 className='fs-4 text-center mb-4 text-green-militar'>Tienda</h2>
        <div className='container-Shop d-flex gap-5 justify-content-center align-items-center bg-white rounded shadow p-2'>
          <img src="../sources/Tendero.png" alt="" style={{ width: '20%' }} />
          <div>
            <h2 className='fs-4'>Contenidos de la tienda</h2>
            <p className='lh-lg text-secondary'>Los productos están relacionados con hábitos de vida, objetos vistos en el comic (incluye Easter Eggs)</p>
            <h2 className='fs-4 mt-2 mt-d-5 bg-green text-white text-center p-1 rounded' style={{ width: '70%' }}>Ir a la Tienda</h2>
          </div>
        </div>
      </section>

      <Separacion />

      <section className='bg-white container-marca d-flex flex-column'>
        <div className='d-flex align-items-center justify-content-center gap-4' style={{ width: '100%', height: '14vh' }}>
          <h2 className='fs-4'>Conoce la marca</h2>
          <img className='image-logo' src="../sources/Logo-OR.png" alt="" />
        </div>
        <div className='container-dataMarca bg-black'>
          <div className='container-Of-tar d-flex flex-column flex-md-row justify-content-evenly align-items-center'>
            <div className='container-tarjetsMarca flex-column flex-md-row d-flex justify-content-center align-items-center gap-3'>
              <TarjetaNegra
                Titulo='¿Qué somos?'
                Imagen='../sources/Signos.png'
                Parrafo='Somos una marca de información y noticias virtual dedicada a la fomentación de hábitos de vida y conocimientos básicos que todo ser humano debería saber, entretenemos y educamos de manera adecuada a casi cualquier persona, somos un medio de entretenimiento y consiencia.'
              />
            </div>
            <div className='container-tarjetsMarca flex-column flex-md-row d-flex justify-content-center align-items-center gap-3'>
              <TarjetaNegra
                Titulo='¿Quiénes somos?'
                Imagen='../sources/Perfil.png'
                Parrafo='Soy un aprendiz del área de producción de multimedia del Centro de Servicios y Gestión empresarial del Sena, este es mi proyecto final con el cual demuestro de manera veraz mis capacidades a nivel de aprendizaje en estos 18 meses de lectiva.'
              />
            </div>
          </div>
          <div className='container-Of-tar-2 d-flex flex-column flex-md-row justify-content-evenly align-items-center'>
            <div className='container-tarjetsMarca d-flex flex-column flex-md-row justify-content-center align-items-center gap-3'>
              <TarjetaNegra
                Titulo='¿Cuál es nuestro objetivo?'
                Imagen='../sources/Flechas.png'
                Parrafo='Nuestro objetivo es sacar a la luz temas de los cuales no se hablan mucho, hacerlo de manera veraz, entretenida y tocando a fondo el tema, queremos una restauración de la mente humana y este es un gran medio para fomentar hábitos de vida y conocimientos del ser humano.'
              />
            </div>
            <div className='button-down d-flex flex-column justify-content-center align-items-center bg-white rounded'>
              <h2 className='fs-5'>Manual de Marca</h2>
              <h2 className='fs-5 text-white bg-black text-center rounded p-2' style={{width:'80%'}}>Descargar</h2>
            </div>
          </div>
        </div>
      </section>

      <Separacion />

      <section className='container-footer flex-column flex-md-row d-flex justify-content-evenly align-items-center bg-secondary'>
        <h3 className='fs-md-6 fs-7 m-sm-4 m-md-0'>Proyecto multimedial - Juan Sebastián Meza - Todos los derechos reservados ©</h3>
        <div className='d-flex alig-items-center justify-content-center gap-3'>
          <img className='images-redes' src="../sources/Facebook.png" alt="" />
          <img className='images-redes' src="../sources/Instagram.png" alt="" />
          <img className='images-redes' src="../sources/TikTok.png" alt="" />
        </div>
      </section>
    </>
  )
}

export default App
