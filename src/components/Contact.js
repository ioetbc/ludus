import React, { Component } from 'react';
import axios from 'axios';

import { generic, email, message, genericNotRequired } from '../schema/ContactFormSchema';
import Close from '../images/icon/icon-close.svg';

class PayForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            businessName: '',
            email: '',
            message: '',
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        e.preventDefault();

        switch(e.target.name) {
            case 'firstName':
                if (generic.validate({ generic: e.target.value }).error) {
                    this.setState({ firstNameError: 'Whoops, please check your answer to continue.' })
                } else {
                    this.setState({ firstName: e.target.value, firstNameError: false });
                }
            break;
            case 'businessName':
                if (genericNotRequired.validate({ genericNotRequired: e.target.value }).error) {
                    this.setState({ businessNameError: 'Whoops, please check your answer to continue.' })
                } else {
                    this.setState({ businessName: e.target.value, businessNameError: false });
                }
            break;
            case 'email':
                if (email.validate({ email: e.target.value }).error) {
                    this.setState({ emailError: 'Whoops, please check your answer to continue.' })
                } else {
                    this.setState({ email: e.target.value, emailError: false });
                }
            break;
            case 'message':
                if (message.validate({ message: e.target.value }).error) {
                    this.setState({ messageError: 'Whoops, please check your answer to continue.' })
                } else {
                    this.setState({ message: e.target.value, messageError: false });
                }
            break;
        }
    };

    handleSubmit() {
        axios({
            method: 'post',
            url: process.env.REACT_APP_CONTACT_ENDPOINT,
            config: {
                headers: {
                    'Content-Type': 'application/json'
                }
            },
            data: {
                firstName: this.state.firstName,
                businessName: this.state.businessName,
                email: this.state.email,
                message: this.state.message,
            }
        })
        .then(function (response) {
            console.log('response', response);
        })
        .catch(function (error) {
            console.log('error', error);
        });
    }

    render() {
        const {
            firstNameError,
            businessNameError,
            emailError,
            messageError,
        } = this.state;

        const hasErrors = [...document.getElementsByClassName('error-message')].length > 0;
        let allValid = false;
        if (
            firstNameError === false &&
            businessNameError === false &&
            emailError === false &&
            messageError === false &&
            !hasErrors
        ) {
            allValid = true;
        }

        const disableButton = allValid;

        return (
            <div className={`contact-screen ${this.props.contactScreen && 'show-contact'}`}>
                <img
                    onClick={this.props.handleContact}
                    style={{ width: '30px', float: 'right', cursor: 'pointer' }}
                    src={Close}
                    alt="close"
                />
                <div style={{ maxWidth: '440px' }}>
                    <h3 style={{ marginTop: '0px' }}>Want to get started on a new project?</h3> 
                    <p>Get in touch</p>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        this.handleSubmit(e, allValid)
                        document.getElementById('submitButton').setAttribute('disabled', 'disabled');
                    }}>

                        <div className='text-field--container'>
                            <div className='text-field'>
                                <input
                                    className='text-field--input'
                                    name="firstName"
                                    id="firstName"
                                    placeholder=' '
                                    type='text'
                                    onBlur={(e) => this.handleInput(e)}
                                />
                                <label className='text-field--label' for='firstName'>Your name</label>
                            </div>
                            {firstNameError && <p className="error-message">{firstNameError}</p>}
                        </div>
                        <div className='text-field--container'>
                            <div className='text-field'>
                                <input
                                    className='text-field--input'
                                    name="businessName"
                                    id="businessName"
                                    placeholder=' '
                                    type='text'
                                    onBlur={(e) => this.handleInput(e)}
                                />
                                <label className='text-field--label' for='businessName'>Business name</label>
                            </div>
                            {businessNameError && <p className="error-message">{businessNameError}</p>}
                        </div>
                        <div className='text-field--container'>
                            <div className='text-field'>
                                <input
                                    className='text-field--input'
                                    name="email"
                                    id="email"
                                    placeholder=' '
                                    type='email'
                                    onBlur={(e) => this.handleInput(e)}
                                    style={{ textTransform: 'none' }}
                                />
                                <label className='text-field--label' for='email'>Email</label>
                            </div>
                            {emailError && <p className="error-message">{emailError}</p>}
                        </div>
                        <div className='text-field--container'>
                                <div className='text-field large'>
                                <textarea
                                        className='text-field--input'
                                        name="message"
                                        id="message"
                                        placeholder=' '
                                        onBlur={(e) => this.handleInput(e)}
                                    />
                                    <label className='text-field--label' for='message'>Tell us what you need</label>
                                </div>
                                {messageError && <p className="error-message">{messageError}</p>}
                            </div>

                        <button
                            type="submit"
                            className={`button ${!disableButton && 'disabled'}`}
                            id='submitButton'
                        >
                            send
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PayForm;