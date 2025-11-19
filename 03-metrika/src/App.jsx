import React from 'react'
import Iconos from './components/Iconos'
import Tarjeta from './components/Tarjeta'

const App = () => {
  return (
    <div class="text-center d-flex justify-content-center align-items-center" style={{width: "100vw", height: "100vh"}}>
      <div class="row">

        <div class="col">
          <Tarjeta
          color="bg-success"
          texto="About Us"
          />
        </div>

        <div class="col">
          Column
        </div>
        <div class="col">
          Column
        </div>
      </div>
    </div>
  )
}

export default App
