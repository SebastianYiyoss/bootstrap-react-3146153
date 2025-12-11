import React from 'react'
import '../src/App.css'

const TarjetaPich = ({Imagen, Titulo, Parrafo}) => {
  return (
    <>
      <img src={Imagen} alt="" className='rounded' />
      <div className='d-flex flex-column'>
        <h3 className='fs-5'>{Titulo}</h3>
        <p className='fs-7 lh-lg text-secondary'>{Parrafo}</p>
      </div>
    </>
  )
}

export default TarjetaPich
