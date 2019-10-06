import React, { Component } from 'react';
import Logo from '../images/logo/logo-white.svg';
import Menu from '../images/icon/mobile-menu.svg';

class Navigation extends Component {
    render() {
        const { contactScreen, handleContact } = this.props;

        return (
            <nav>
                <div className="nav-desktop"
                    style={{ right: contactScreen ? '50vw' : '0vw' }}
                >
                    <div className="nav-top">
                        <p>Creatives that develop brands across design, animation and videography.</p>
                        <p className="contact" onClick={handleContact}>Contact</p>
                    </div>
                <div className="nav-bottom">
                    <img style={{ width: '150px' }} src={Logo} alt="ludus logo" />
                    <p>Website in development</p>
                </div>
                </div>
                    <div className="nav-mobile">
                        <div className="nav-menu">
                            <img style={{ width: '150px', height: '50px' }} src={Logo} alt="ludus logo" />
                            <img style={{ cursor: 'pointer', width: '30px', marginTop: '13px' }} src={Menu} onClick={handleContact} alt="menu"/>
                        </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;
