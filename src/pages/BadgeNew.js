import React from 'react';

import './styles/BadgeNew.css';
import logo_header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgeNew extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
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
            await api.badges.create(this.state.form);
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

        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img
                        className="img-fluid BadgeNew__hero-image"
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
                            <h1>New Attendant</h1>
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

export default BadgeNew;