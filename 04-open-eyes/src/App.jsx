import React from 'react'
import './App.css'

const App = () => {
  return (
    <>
    <header className=' px-3 p-2 d-flex justify-content-between align-items-center fixed-top mt-1'>
      <div className='border bg-white border-black p-2 sec-1 d-flex gap-4 align-items-center justify-content-center rounded' style={{width: '20%'}}>
        <img src="../sources/Logo.png" alt="" style={{width: '31%'}} />
        <h2 className='fs-6 text bg-black p-2 text-white rounded text-center m-0'>conoce la marca</h2>
      </div>
      <div className='bg-black' style={{width: '62%', height: '.1vh'}}></div>
      <div className='sec-1 bg-white d-flex gap-3 border border-black p-2 rounded' style={{width: '17%'}}>
        <img src="../sources/Abajo.svg" alt="" style={{width: '14%'}} />
        <h2 className='fs-5 text border border-black bg-white rounded text-center p-1 m-0' style={{width: '60%'}}>inicio</h2>
        <img src="../sources/Arriba.svg" alt="" style={{width: '14%'}} />
      </div>
    </header>



    <section className='bg-blue-light' style={{width: '100%', height: '100vh'}}>
    </section>



    </>
  )
}

export default App
