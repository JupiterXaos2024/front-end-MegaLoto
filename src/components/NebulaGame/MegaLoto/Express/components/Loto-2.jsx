import React, {useState,useEffect} from 'react';
import Balota from './Balota'
import Tablero from './tablero';
import NeonWord from './neonWord';
import Premio from './premio'
import '../css/loto-2.css'



function MegaLoto() {
    
    return(
        <div className='MegaLotoExpress'>
            <video muted autoPlay className="background-video">
                <source src='/videos/fondoLotoExpress.mp4'/>
            </video>
            <div className='Encabezado'>
                <div className='tituloNeon'>
                    <NeonWord text='MEGA LOTO EXPRESS'/>
                </div>
                <div className='contenedorPremio'>
                    <Premio/>
                </div>
                <div className='contenedorBalota'>
                    <Balota/>
                </div>
            </div>
            <div className='contenedorTablero'>
                <Tablero />
            </div>

        </div>
    )
  
  
}

export default MegaLoto;
