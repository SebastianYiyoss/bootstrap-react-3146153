import React from 'react'

const Tarjeta = ({imagen, texto, color, tamaño}) => {
  return (
    <div className={color} style={{tamaño}}>
      <img src={imagen} alt="" />
      <h3>{texto}</h3>
    </div>
  )
}

export default Tarjeta
