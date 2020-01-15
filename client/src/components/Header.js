import React from 'react';
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-end">
                    <GoogleAuth />
                </div>
            </div>
            <div className="container navbar">
                <Link to="/" className="item">
                    Streamy
            </Link>
                <Link to="/" className="item">
                    All Streams
            </Link>
            </div>
        </>
    )
}

export default Header;