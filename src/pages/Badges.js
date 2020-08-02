import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import api from '../api';
import MiniLoader from '../components/MiniLoader';

class Badges extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
    }

    componentDidMount () {  //Best place to make request because all the code of our components is ready to use.
        this.fetchData()

        // Apṕlying polling
        // this.intervalId = setInterval(this.fetchData, 5000);
    }

    // componentWillUnmount() {
    //     clearInterval(this.intervalId);
    // }

    fetchData = async () => {
        this.setState({ loading: true, error: null });  // We initialize again the values of login and error in case that fetchData() is called again

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data})
        }
        catch (error) {
            this.setState({ loading: false, error: error})
        }
    }

    render() {
        if (this.state.loading === true && !this.state.data) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />
        }

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>

                    <div className="Badges__container">
                        {/* {this.state.loading && <MiniLoader/>} */}
                        <BadgesList badges={this.state.data} />
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Badges;