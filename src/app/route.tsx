import React, { useLayoutEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Router } from 'react-router'
import { BrowserHistory } from 'history'
import { history } from './history'
import pages from './pages'

interface CustomRouterProps {
    history: BrowserHistory
    children: React.ReactNode
}

const CustomRouter = ({ history, ...props }: CustomRouterProps) => {
    const [state, setState] = useState({
        action: history.action,
        location: history.location,
    })

    useLayoutEffect(() => history.listen(setState), [history])

    return (
        <Router
            {...props}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        />
    )
}

const routes = () => {
    return (
        <CustomRouter history={history}>
            <Routes>
                <Route path="/" element={<pages.Home />} />
            </Routes>
        </CustomRouter>
    )
}

export default routes
