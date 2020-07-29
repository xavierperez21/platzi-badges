import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import platziconf_logo from '../images/platziconf-logo.svg';
import astronauts from '../images/astronauts.svg';

function Home() {
    return (
        <div className="Home">
            <div className="container">
                <div className="row">
                    <div className="Home__col col-12 col-md-4">
                        <img
                            src={platziconf_logo}
                            alt="Platzi Conf Logo"
                            className="img-fluid mb-2"
                        />

                        <h1>PRINT YOUR BADGES</h1>
                        <p>The easiest way to manage your conference</p>
                        <Link className="btn btn-primary" to="/badges">
                            Start now
                        </Link>
                    </div>

                    <div className="Home-col d-none d-md-block col-md-8">
                        <img
                            src={astronauts}
                            alt="Astronauts"
                            className="img-fluid p-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;