import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css'
import twitter_logo from '../images/twitter.svg'

class BadgesList extends React.Component {
    render() {
        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No badges were found :(</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            )
        }

        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id}>
                            <img className="Badge__list-avatar" src={badge.avatarUrl} alt="avatar"/>
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
