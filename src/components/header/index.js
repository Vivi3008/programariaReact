import React from 'react'
import './style.css'
import Logo from '../../assets/logo-04.png'


export default function header () {
    return(
        <header className="head">
            <img src={Logo} alt="Logo Programaria"/>
            <a href="https://www.programaria.org/curso-online-euprogramo/">Curso Online</a>
        </header>
        
    )
}