// * import dependencies
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Typography, Layout, Space } from 'antd'

// * importing components
import { Navbar } from './components'

// * importing style files 
import './App.css'

const App = () => {
    return (
        <div className='app'>
            {/* * navbar of the page */}
            <div className='navbar'>
                <Navbar />
            </div>
            {/* * main content of the page */}
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        {/* ! Routes is an updated version of Switch */}
                        <Routes>
                            {/* * a specific component will be rendered when an exact path will be hit */}
                            <Route exact path='/'>
                                <Homepage />
                            </Route>
                            <Route exact path='/easternconference'>
                                <EasternConference />
                            </Route>
                            <Route exact path='/westernconference'>
                                <WesternConference />
                            </Route>
                            {/* <Route exact path='/playerstats'>
                                <PlayerStats />
                            </Route> */}
                        </Routes>
                    </div>
                </Layout>
            </div>
            {/* * footer */}
            <div className='footer'>

            </div>
        </div>
    )
}

export default App