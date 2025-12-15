import React from 'react'
import '../styles/MediaQ.css'

const Personajes = ({ Imagen, Nombre }) => {
    return (
        <div className='d-flex justify-content-between align-items-center flex-column p-1 gap-4' style={{width:'100%'}}>
            <div className='container-TarjetPersonaje d-flex justify-content-between align-items-center flex-column p-3 bg-brown-2 rounded shadow' style={{ width: '100%'}}>
                <h2 className='fs-5 text-brown'>{Nombre}</h2>
                <img className='rounded container-imagesPer' src={Imagen} alt="" />
            </div>
            <h2 className='bg-white-op p-2 text-center fs-4 rounded shadow button-Pers'>Conocer</h2>
        </div>
    )
}

export default Personajes
