import React from 'react';
import { Link } from 'react-router-dom';

import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

import confLogo from '../images/platziconf-logo.svg';
import './styles/BadgeDetails.css';

function BadgeDetails (props) {
    const badge = props.badge;
    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6 confLogo">
                            <img className="confLogo-img" src={confLogo} alt="Logo de la Conferencia"/>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row row-details">
                    <div className="col">
                        <Badge
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            twitter={badge.twitter}
                            jobTitle={badge.jobTitle}
                        />
                    </div>
                    <div className="col col-actions mt-4">
                        <h2>Actions</h2>
                        <div className="container__buttons">
                            <div>
                                <Link
                                    className="btn btn-primary mb-4 mr-4"
                                    to={`/badges/${badge.id}/edit`}>
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger">
                                    Delete
                                </button>
                                <DeleteBadgeModal
                                    onClose={props.onCloseModal}
                                    isOpen={props.modalIsOpen}
                                    onDeleteBadge={props.onDeleteBadge}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BadgeDetails;