import React from 'react';

import './styles/BadgeEdit.css';
import logo_header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';
import NotFound from './NotFound';

class BadgeEdit extends React.Component {
    state = {
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async (event) => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.badges.read(this.props.match.params.badgeId); // React-router helps us acceding to the URL of the components thanks to the <Route/> component. We can access through the prop 'match' that is an object who has the property 'params' and then params are the params of the URL where it is 'badgeId'.
            this.setState({ loading: false, form: data })
        }
        catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    handleChange = event => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value,
            },
        });
    };

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ loading: true, error: null })
        // After React renders again all the components passes to the next line, like here will pass to the try block.

        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form);
            this.setState({ loading: false });

            // Every component inside a <Switch /> has a property named history. This is thanks to react-router-dom
            // Redirecting to the page badges in case the process was succesful
            this.props.history.push('/badges');
        }
        catch(error) {
            this.setState({ loading: false, error: error });
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <NotFound />
        }

        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img
                        className="img-fluid BadgeEdit__hero-image"
                        src={logo_header}
                        alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row row-details">
                        <div className="col-6 col-badge">
                            <Badge
                                firstName={this.state.form.firstName || 'FIRST NAME'}
                                lastName={this.state.form.lastName || 'LAST NAME'}
                                twitter={this.state.form.twitter || 'twitter'}
                                jobTitle={this.state.form.jobTitle || 'JOB TITLE'}
                                email={this.state.form.email || 'email'}
                            />
                        </div>

                        <div className="col-6 col-form">
                            <h1>Edit Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                onSubmit={this.handleSubmit}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeEdit;