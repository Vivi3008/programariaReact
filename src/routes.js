import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './components/main'
import WomanDetails from './components/womanDetails'

const Routes = () => (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route  path="/show/:id" component={WomanDetails}/>
        </Switch>
    </BrowserRouter>
)

export default Routes