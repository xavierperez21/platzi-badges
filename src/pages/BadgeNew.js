import React from 'react';

import './styles/BadgeNew.css';
import logo_header from '../images/badge-header.svg'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import Navbar from '../components/Navbar';

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={logo_header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName="Luis Xavier" 
                                lastName="Pérez" 
                                twitter="xavierprz21" 
                                avatarUrl="https://s.gravatar.com/avatar/f71cdeeb5ed4972f171b7cf3ed67d763?s=80"
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;