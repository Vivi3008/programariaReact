import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import './style.css'

export default function WomanDetail() {
    const [woman, setWoman] = useState([])

    useEffect(() => {

        async function fetchData(){
            
            const response = await api.get(`/show/11`)
            setWoman(response.data[0])
            
        }

        fetchData()
    }, [])

    return (
        <div className="main">
            <h1>{woman.Name}</h1>
            <p>{woman.Description}</p>
            <p><a href={woman.Url}>Ver mais</a></p>
        </div>
    )
}