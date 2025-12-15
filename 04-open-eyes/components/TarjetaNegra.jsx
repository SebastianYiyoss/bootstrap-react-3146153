import React from 'react'

const TarjetaNegra = ({Imagen, Titulo, Parrafo}) => {
  return (
    <>
      <img src={Imagen} alt="" style={{width:'30%'}} />
      <div>
        <h2 className='fs-5 text-white'>{Titulo}</h2>
        <p className='text-white lh-lg fs-7'>{Parrafo}</p>
      </div>
    </>
  )
}

export default TarjetaNegra
