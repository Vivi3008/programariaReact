import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import './style.css'

export default class Main extends Component {
    state = {
        woman: []
    }

    async componentDidMount() {
        const response = await api.get('/index/1')
        this.setState({ woman: response.data })
    }


    render() {
        const { woman } = this.state

        return <div className="main">
            <h1>Mulheres que fizeram história na tecnologia</h1>
            <div className="content">
                {woman.map(item => (
                    <div key={item.id} className="woman">
                        <h2>{item.Name}</h2>
                        <p><Link to={`/show/${item.id}`}>Acessar</Link></p>
                    </div>
                ))}
            </div>
        </div>


    }

} 
