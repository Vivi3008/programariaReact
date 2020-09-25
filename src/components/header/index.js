import React from 'react'
import './style.css'
import Logo from '../../assets/logo-04.png'


export default function header () {
    return(
        <header className="head">
            <a href="https://www.programaria.org/"><img src={Logo} alt="Logo Programaria"/></a>
            <a href="https://www.programaria.org/curso-online-euprogramo/" className="button">Curso Online</a>
        </header>
        
    )
}