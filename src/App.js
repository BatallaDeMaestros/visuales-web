import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './header/Header.js'
import Footer from './footer/Footer.js'
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
            <div className="row">
            <div className="col-12">
            <Header/>
            </div>
            </div>
            <div className="row">
            <div className="col-12 text-center">
            <Footer/>
            </div>
            </div>
            </div>
        )
    }
}

export default App
