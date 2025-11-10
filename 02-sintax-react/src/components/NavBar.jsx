import React from 'react'
import '../stylesheets/NavBar.css'

export const NavBar = () => {
    return(
        <div className='barra'>
            <div className='navegar'>
                <div className='icono'>
                <h2>LENGUAJES</h2>
                <h2>💬</h2>
            </div>
            <button className='btn-mode'>☀</button>
            </div>
        </div>
    )
}