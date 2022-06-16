import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from './Landing Page/landingPage'

function screens() {
    return (
        <div>
            <Route path="/" exact>
                <LandingPage />
            </Route>
        </div>
    )
}

export default screens
