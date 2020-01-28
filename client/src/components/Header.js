import React from 'react';
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {
    return (
        <>
           <div className="ui horizontal inverted divider"></div>
            <div className="container">
                <div className="row justify-content-end">
                    <GoogleAuth />
                </div>
            </div>
            <div className="container ui top attached tabular menu">
                <Link to="/" className="item left active">
                    All streams
                </Link>
                <Link to="/" className="item right ">
                    
                </Link>
            </div>
        </>
    )
}

export default Header;