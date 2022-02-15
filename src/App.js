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

            </div>
            {/* * footer */}
            <div className='footer'>

            </div>
        </div>
    )
}

export default App