import React from 'react'
import '../stylesheets/ExtensionCard.css'

export const ExtensionCard = ({imageC, tituloC, descripC}) => {
    return(
        <>
        <div className='general'>
            <div className='tarjeta'>
                <img className='icon' src={imageC} alt="" />
                <div className='text'>
                    <h1 className='title'>{tituloC}</h1>
                    <p>{descripC}</p>
                </div>
            </div>
            <div className='botones'>
                <button className='botonOne'>REVISAR</button>
                <div className='botonTwo'>👀</div>
            </div>
        </div>
        </>
    )
}