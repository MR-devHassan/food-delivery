import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/assets'

function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
        <p>Pour Améliorer votre éxpérience Télécharger <br />Foody Application</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="Play store" />
            <img src={assets.app_store} alt="App store" />
        </div>
    </div>
  )
}

export default AppDownload
