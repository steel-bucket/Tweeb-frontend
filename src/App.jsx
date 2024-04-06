import React, {lazy, Suspense, useEffect, useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Logout} from './components/logout.jsx';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Posts = lazy(() => import('./pages/Posts/Posts.jsx'));

function App() {
    // const [message, setMessage] = useState('');
    // useEffect(() => {
    //     if (localStorage.getItem('access_token') === null) {
    //         window.location.href = '/login'
    //     } else {
    //         (async () => {
    //             try {
    //                 const {data} = await axios.get(
    //                     'http://localhost:8000/home/', {
    //                         headers: {
    //                             'Content-Type': 'application/json'
    //                         }
    //                     }
    //                 );
    //                 setMessage(data.message);
    //             } catch (e) {
    //                 console.log('not auth')
    //             }
    //         })()
    //     }
    //     ;
    // }, []);

    return (<BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={<Suspense fallback={<div>Loading...</div>}>
                    <Home/>
                </Suspense>}
            />
            <Route path="/posts" element={<Suspense fallback={<div>Loading...</div>}>
                <Posts/>
            </Suspense>}
            />
            <Route
                path="/logout"
                element={<Logout/>}
            />
        </Routes>
    </BrowserRouter>);
}


export default App;
