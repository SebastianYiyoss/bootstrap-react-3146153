import React from 'react'
import '../stylesheets/colors.css'

const Tarjeta = ({imagen, texto, tamañoImagen}) => {
  return (
    <>
      <img src={imagen} alt="" width={tamañoImagen} />
      <h3 style={{width:'100%'}} className='text-start fs-10'>{texto}</h3>
    </>
  )
}

export default Tarjeta
