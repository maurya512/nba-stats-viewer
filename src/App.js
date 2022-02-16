// * import dependencies
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Typography, Layout, Space } from 'antd'

// * importing components
import { Navbar, Homepage, EasternConference, WesternConference, PlayerStats } from './components'

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
                            <Route exact path='/'
                                element={<Homepage />} />
                            <Route exact path='/easternconference'
                                element={<EasternConference />} />
                            <Route exact path='/westernconference'
                                element={<WesternConference />} />
                            {/* <Route exact path='/playerstats'>
                                <PlayerStats />
                            </Route> */}
                        </Routes>
                    </div>
                </Layout>
                {/* * footer */}
                <div className='footer'>
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Nba Stats <br />
                        All rights reserved
                    </Typography.Title>
                    {/* * special ant design div that gives us spacing between the items */}
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/easternconference">EC</Link>
                        <Link to="/westernconference">WC</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App