import React from 'react'

const TarjetaBlanca = ({Texto, Titulo, Imagen}) => {
  return (
    <>
      <h2 className='fs-4 text-center'>{Titulo}</h2>
      <p className='fs-6 lh-lg text-center text-secondary' style={{width:'85%'}}>{Texto}</p>
    </>
  )
}

export default TarjetaBlanca
