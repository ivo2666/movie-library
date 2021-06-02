import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home, Register, Login, Search } from './pages'

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
        <Route path="/login" >
                <Login />
            </Route>
        <Route path="/search" >
                <Search />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Navigation