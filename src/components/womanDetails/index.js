import React, { Component } from 'react'
import api from '../../services/api'
import './style.css'

export default class WomanDetails extends Component {
    state = {
        woman: []
    }

    async componentDidMount() {

        const { id } = this.props.match.params

        const response = await api.get(`/show/${id}`)


        this.setState({ woman: response.data })
        console.log(this.state.woman[0].Name)

    }

    render() {
        const  { woman }  = this.state.woman[0]

        return <div className="principal">

                <div className="content">
                    <p>{woman.Name}</p>
                </div>
            





            </div>
        
    }

}