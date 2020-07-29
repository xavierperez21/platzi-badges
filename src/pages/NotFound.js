import React from 'react';

import error_404 from '../images/error_404.svg'
import './styles/NotFound.css'

function NotFound() {
    return (
        <div className="main_container">
            <h1 className="title_error">OOPS! PAGE NOT FOUND</h1>
            <img
                src={error_404}
                alt="image_404"
                className="img_error"
            />
        </div>
    )
}

export default NotFound;