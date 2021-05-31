import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Register } from './pages'

const Navigation = () => {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/" exact>
                <Home />
            </Route>
        <Route path="/register" >
                <Register />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Navigation