import React from 'react'
import loader from '../../assets/valentine1.gif';
import { useNavigate } from 'react-router-dom';

import './Loading.css'
import 'animate.css'; // Importa Animate.css

export const Loading = () => {
    
  const navigate = useNavigate();

  const handleClick = () => { 
    navigate('/home')
  }

  return (
    <main className='loading-main animate__animated animate__fadeInDown'>
      <div id='loader-initial' className="container loading-screen">
        <h1 className='title'>Para la niña mas hermosaaa</h1>
        <h2 className='subtitle'>Preciosaa Michi ALV (Asunto Leido Va!) :3 </h2>
        <img className="img-loader" src={loader} alt="loader" />
        <div className="container-spin-text">
        <p className='paragraph'>Dale continuar, michi...</p>       
        </div>
        <button className='continue' onClick={handleClick} >Continuar</button>        
      </div>
    </main>      
  )
}
