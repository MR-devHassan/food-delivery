import React, { useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'

function LoginPopup({setShowLogin}) {
    const[currState, setCurrentState] = useState("Login")
  return (
    <div className='login-popup'>
      <form className="login-popup-conatiner">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder="Nom d'utilisateur" required />}
            <input type="text" placeholder='Mot de passe' required />
            <input type="email" placeholder='E-mail' required />
        </div>
        <button>{currState!=="Login"?"S'inscrire":"Se connecter"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" />
            <p>Je comprend les condition d'utilisation</p>
        </div>
        {currState==="Login"
        ?<p>S'inscrire ? <span onClick={() => setCurrentState("Sign Up")}>Clicker ici</span></p>
        :<p>Déja s'inscrie  ? <span onClick={() => setCurrentState("Login")}>Se connecter ici</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
