import React from 'react'
import "./App.css"
import { NavBar } from './components/NavBar'
import { ExtensionCard } from './components/ExtensionCard'

export const App = () => {
  return (
    <>
      <NavBar />
      <div className='containerCards'>
        <ExtensionCard imageC='' tituloC='' descripC='' />
        <ExtensionCard imageC='' tituloC='' descripC='' />
        <ExtensionCard imageC='' tituloC='' descripC='' />
        <ExtensionCard imageC='' tituloC='' descripC='' />
        <ExtensionCard imageC='' tituloC='' descripC='' />
        <ExtensionCard imageC='' tituloC='' descripC='' />
        <ExtensionCard imageC='' tituloC='' descripC='' />
        <ExtensionCard imageC='' tituloC='' descripC='' />
        <ExtensionCard imageC='' tituloC='' descripC='' />

        <h2>React + Bootstrap</h2>
      </div>
    </>
  )
}