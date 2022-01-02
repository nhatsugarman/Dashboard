import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/customers' component={Customers} />
        </Switch>
    )
}

export default Routes
