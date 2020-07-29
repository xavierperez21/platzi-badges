import React from 'react';

import './styles/BadgeNew.css';
import logo_header from '../images/badge-header.svg'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    } };

    handleChange = event => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value,
            },
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={logo_header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                avatarUrl="https://s.gravatar.com/avatar/f71cdeeb5ed4972f171b7cf3ed67d763?s=80"
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;