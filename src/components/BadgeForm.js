import React from 'react';

class BadgeForm extends React.Component {
    // state = {};

    // Remember, we use arrow functions because Arrow functions adopt the...
    //...this binding of the enclosing scope (in other words, they don’t change...
    //...the meaning of this), so things just work automatically.
    // handleChange = event => {
    //     this.setState({                     // saving the info in the state
    //         [event.target.name]: event.target.value // Here we save the correspond value in the key of each input, for example: event.target.name: firstName, this is equal to [event.target.name] = firstName, so [event.target.name]: event.target.value is firstName: 'luis'
    //     })
    // }

    handleClick = event => {
        console.log('Button was clicked')
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("Form was submitted");
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={this.props.formValues.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={this.props.formValues.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="email"
                            name="email"
                            value={this.props.formValues.email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={this.props.formValues.jobTitle}
                        />
                    </div>


                    <div className="form-group">
                        <label>Twitter</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.props.formValues.twitter}
                        />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>

            </div>
        );
    }
}

export default BadgeForm;