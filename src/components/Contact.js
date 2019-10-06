import React, { Component } from 'react';

import { generic, email, phone, message } from '../schema/ContactFormSchema';
import Close from '../images/icon/icon-close.svg';

class PayForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
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
            case 'lastName':
                if (generic.validate({ generic: e.target.value }).error) {
                    this.setState({ lastNameError: 'Whoops, please check your answer to continue.' })
                } else {
                    this.setState({ lastName: e.target.value, lastNameError: false });
                }
            break;
            case 'email':
                if (email.validate({ email: e.target.value }).error) {
                    this.setState({ emailError: 'Whoops, please check your answer to continue.' })
                } else {
                    this.setState({ email: e.target.value, emailError: false });
                }
            break;
            case 'phone':
                if (phone.validate({ phone: e.target.value }).error) {
                    this.setState({ phoneError: 'Whoops, please check your answer to continue.' })
                } else {
                    this.setState({ phone: e.target.value, phoneError: false });
                }
            break;
            case 'message':
                if (generic.validate({ message: e.target.value }).error) {
                    this.setState({ messageError: 'Whoops, please check your answer to continue.' })
                } else {
                    this.setState({ message: e.target.value, messageError: false });
                }
            break;
        }
    };

    render() {
        const {
            firstNameError,
            lastNameError,
            emailError,
            phoneError,
            messageError,
        } = this.state;

        const hasErrors = [...document.getElementsByClassName('error-message')].length > 0;
        let allValid = false;
        if (
            firstNameError === false &&
            lastNameError === false &&
            emailError === false &&
            phoneError === false &&
            messageError === false &&
            !hasErrors
        ) {
            allValid = true;
        }

        const disableButton = allValid;

        return (
            <div className="contact-screen" style={{ right: this.props.contactScreen ? '0px' : '-50vw', transition: 'right .5s ease-in-out' }}>
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
                                <label className='text-field--label' for='firstName'>first name</label>
                            </div>
                            {firstNameError && <p className="error-message">{firstNameError}</p>}
                        </div>
                        <div className='text-field--container'>
                            <div className='text-field'>
                                <input
                                    className='text-field--input'
                                    name="bussiness"
                                    id="bussiness"
                                    placeholder=' '
                                    type='text'
                                    onBlur={(e) => this.handleInput(e)}
                                />
                                <label className='text-field--label' for='bussiness'>Business name</label>
                            </div>
                            {lastNameError && <p className="error-message">{lastNameError}</p>}
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
                                <label className='text-field--label' for='email'>email</label>
                            </div>
                            {emailError && <p className="error-message">{emailError}</p>}
                        </div>
                        <div className='text-field--container'>
                                <div className='text-field large'>
                                    <input
                                        className='text-field--input'
                                        name="message"
                                        id="message"
                                        placeholder=' '
                                        type='text'
                                        onBlur={(e) => this.handleInput(e)}
                                    />
                                    <label className='text-field--label' for='message'>Tell us what you need</label>
                                </div>
                                {phoneError && <p className="error-message">{phoneError}</p>}
                            </div>

                        <button
                            type="submit"
                            className={`button ${!disableButton && 'disabled'}`}
                            id='submitButton'
                        >
                            pay now
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PayForm;