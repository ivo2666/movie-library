import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages'

const Navigation = () => {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/" exact>
                <Home />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Navigation