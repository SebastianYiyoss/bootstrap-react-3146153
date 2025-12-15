import React from 'react'
import '../src/App.css'
import '../styles/MediaQ.css'

const TarjetaPich = ({Imagen, Titulo, Parrafo}) => {
  return (
    <>
      <img src={Imagen} alt="" className='rounded container-P-Images' />
      <div className='d-flex flex-column'>
        <h3 className='fs-4 pt-3'>{Titulo}</h3>
        <p className='fs-7 lh-lg text-secondary'>{Parrafo}</p>
      </div>
    </>
  )
}

export default TarjetaPich
