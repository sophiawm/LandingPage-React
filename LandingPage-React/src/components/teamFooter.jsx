//import React, { useState } from 'react';
//import staff from '../staffData.json';
//import { useEffect } from 'react';


const StaffProfile = () =>  {
    const workersProfiles = [
        {
            name: 'Mel Loren',
            jobTitle: 'Especialista en Transformación Digital',
            description:  'Tripulante del cambio digital con una varita mágica de bits y bytes. Navego por la maraña tecnológica como un explorador curioso. Convertir caos en innovación es mi superpoder, siempre con una taza de té en mano y un emoji para cada situación. ¡Transformemos el mundo, un algoritmo a la vez! ',
            photoMenu: '../images/persona4.png',
            photoPage: '../images/persona4-profile.png',
            alt: 'Foto de perfil de Mel Loren'
        },
            {
            name: 'Mel Loren', 
            jobTitle: 'Especialista en Transformación Digital',
            description:  'Tripulante del cambio digital con una varita mágica de bits y bytes. Navego por la maraña tecnológica como un explorador curioso. Convertir caos en innovación es mi superpoder, siempre con una taza de té en mano y un emoji para cada situación. ¡Transformemos el mundo, un algoritmo a la vez! ',
            photoMenu: '../images/persona4.png',
            photoPage: '../images/persona4-profile.png',
            alt: 'Foto de perfil de Mel Loren'
        },
            {
            name: 'Mel Loren',
            jobTitle: 'Especialista en Transformación Digital',
            description:  'Tripulante del cambio digital con una varita mágica de bits y bytes. Navego por la maraña tecnológica como un explorador curioso. Convertir caos en innovación es mi superpoder, siempre con una taza de té en mano y un emoji para cada situación. ¡Transformemos el mundo, un algoritmo a la vez! ',
            photoMenu: '../images/persona4.png',
            photoPage: '../images/persona4-profile.png',
            alt: 'Foto de perfil de Mel Loren'
        },
            {
            name: 'Mel Loren',
            jobTitle: 'Especialista en Transformación Digital',
            description:  'Tripulante del cambio digital con una varita mágica de bits y bytes. Navego por la maraña tecnológica como un explorador curioso. Convertir caos en innovación es mi superpoder, siempre con una taza de té en mano y un emoji para cada situación. ¡Transformemos el mundo, un algoritmo a la vez! ',
            photoMenu: '../images/persona4.png',
            photoPage: '../images/persona4-profile.png',
            alt: 'Foto de perfil de Mel Loren'
        }
        ];

    return (
        workersProfiles.forEach((worker) => {
            return (
                <>
                <div className="staffProfile">
                    <img src={worker.photoMenu} alt={worker.alt} />
                    <div className="staffDetails">
                        <h1>{worker.name}</h1>
                        <h4>{worker.jobTitle}</h4>
                        <p> {worker.description}</p>
                        <div className="staffDetails">
                            <img src="../images/linkedin.png" alt="LinkedIn Icon" />
                            <button>Te llamamos</button>
                        </div>
                    </div>
                </div>
                </>
                )
        }
        )   
)
};


export default StaffProfile