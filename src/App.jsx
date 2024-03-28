import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navb from './components/Navbar/Navbar.jsx';
import Auth from './components/Auth/Auth.jsx';

function Home() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Add this line to hide vertical scroll
        }}>
            <div className='main'>
                <div className='text'>
                    <h1>Tweeb</h1>
                    <p style={{ fontWeight: "lighter" }}>An open-source front to job postings on Twitter</p>
                </div>
                <div className='form'>
                    {
                        <Auth />
                    }
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <Home />
        </div>
    );
}

export default App;
