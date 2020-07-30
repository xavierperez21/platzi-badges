import React from 'react';

import './styles/PageError.css';
import internal_error from '../images/internal_error.svg';

function PageError(props) {
    return (
        <div className="PageError">
            <img className="PageError__img" src={internal_error} alt="Internal Error"/>
        </div>
    );
}

export default PageError;