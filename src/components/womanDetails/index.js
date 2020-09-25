import React, { Component } from 'react'
import api from '../../services/api'
import './style.css'

export default class WomanDetails extends Component {
    state = {
        woman: {}
    }
    
    async componentDidMount() {

        const { id } = this.props.match.params

        const response = await api.get(`/show/${id}`)
        console.log(response.data)
        
        this.setState({ woman: response.data })
        console.log(this.state)
    }

    render() {
        const { woman } = this.state

        return <div className="principal">
             
                <div className="content">
                   
                         <h1>{woman.Name}</h1>
                         <p>{woman.Description}</p>
                         <p>Url:{woman.Url}</p>
                   
                   
                </div>
            
           
        </div>
    }

}