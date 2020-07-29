import React from 'react';

import './styles/BadgesList.css'
import twitter_logo from '../images/twitter.svg'

class BadgesList extends React.Component {
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id}>
                            <img className="Badge__list-avatar" src="https://s.gravatar.com/avatar/f71cdeeb5ed4972f171b7cf3ed67d763?s=80" alt="avatar"/>
                            <div className="Badge__info-container">
                                <strong>
                                    {badge.firstName} {badge.lastName}
                                </strong>
                                <br/><img className="Badge__twitter" src={twitter_logo} alt="twitter"/><span className="Badge__twitter-user">@{badge.twitter}</span>
                                <br/><span className="Badge__jobTitle">{badge.jobTitle}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default BadgesList;
