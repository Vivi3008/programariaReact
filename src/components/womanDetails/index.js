import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../../services/api'
import arrow from '../../assets/arrow-left.svg'
import './style.css'

export default function WomanDetail() {
    const [woman, setWoman] = useState([])
    const { id } = useParams() //capturando o parametro id da url

    useEffect(() => {
        async function fetchData() {
            const response = await api.get(`/show/${id}`)
            setWoman(response.data[0])
        }
        fetchData()

    }, [id])

    return (
        <div className="info">

            <div className="principal">
                <h1>{woman.Name}</h1>
                <p>{woman.Description}</p>
                <div className="link"><a href={woman.Url} target="_blank" rel="noopener noreferrer">Ver mais</a></div>
            </div>

            <div className="back">
                <img src={arrow} alt=""/>
                <Link to='/' className="link-back">Voltar</Link>
            </div>

        </div>
    )
}