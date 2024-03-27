import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Navb from "./components/Navbar/Navbar.jsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Auth from "./components/Auth/Auth.jsx"
//
//
// function App() {
//
//     return (<div className="App">
//         <Navb/>
//         <div className="overlay"></div>
//         <h1>Welcome to Tweeb</h1>
//         <p>a open source front to job postings on twitter</p>
//         <Auth/>
//     </div>)
// }
//
// export default App
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navb from './components/Navbar/Navbar.jsx';
import Auth from './components/Auth/Auth.jsx';

function Home() {
    return (<div className={"home"}>
            <Navb/>
            <div className="overlay"></div>
            <h1>Welcome to Tweeb</h1>
            <p>an open-source front to job postings on Twitter</p>
        </div>);
}

function App() {
    return (
        <div>
            <Home/>
            <Auth/>
        </div>);
}

export default App;
