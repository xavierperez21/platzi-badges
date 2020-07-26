import React from 'react';

import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo Conferencia"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://s.gravatar.com/avatar/f71cdeeb5ed4972f171b7cf3ed67d763?s=80" alt="Avatar"/>
                    <h1>Luis Xavier <br/> Pérez</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>Machine Learning Engineer</h3>
                    <div>@xavierprz21</div>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge;