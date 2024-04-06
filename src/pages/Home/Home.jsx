import React from "react";
import Auth from "../../components/Auth/Auth.jsx";
import './Home.css';

function Home() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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

export default Home;