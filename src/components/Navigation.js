import React, { Component } from 'react';
import LogoBlack from '../images/logo/logo-black.svg';
import LogoWhite from '../images/logo/logo-white.svg';

import Menu from '../images/icon/mobile-menu.svg';
import Instagram from '../images/icon/instagram.svg';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state={ fadeDown: true, fadeUp: true };
    }

    render() {
        const { contactScreen, handleContact } = this.props;

        return (
            <nav>
                <div className="nav-desktop"
                    style={{ right: contactScreen ? '50%' : '0%' }}
                >
                    <div className={`nav-top ${this.state.fadeDown && 'fade-down'}`}>
                        <p style={{ fontWeight: 'bold' }}>Creatives that develop brands across design, animation and videography.</p>
                        <p className="hover-animation" style={{ fontWeight: 'bolder', cursor: 'pointer' }} onClick={handleContact}>Contact</p>
                    </div>
                    <div className={`nav-bottom ${this.state.fadeUp && 'fade-up'}`}>
                        <img style={{ width: '150px' }} src={LogoWhite} alt="ludus logo" />
                        <a href="https://www.instagram.com/ludus_design/" target="_blank">
                        <p className="hover-animation" style={{ cursor: 'pointer', marginBottom: '20px', letterSpacing: '0.5' }}>Follow us on Instagram</p><img className="nav-instagram" src={Instagram} alt="instagram" />
                        </a>
                    </div>
                </div>


                <div className="nav-mobile">
                    <div className="nav-menu">
                        <img style={{ width: '150px', height: '50px' }} src={LogoBlack} alt="ludus logo" />
                        <img style={{ cursor: 'pointer', width: '30px', marginTop: '10px' }} src={Menu} onClick={handleContact} alt="menu"/>
                    </div>
                </div>

                <div className="strap-mobile">
                    <p>Creatives that develop brands across design, animation and videography.</p>

                    <div className="social">
                        <img className="icon" src={Instagram} alt="instagram" />
                        <a href="https://www.instagram.com/ludus_design/" target="_blank">
                            <p className="hover-animation">Follow us on Instagram</p>
                        </a>
                    </div>
                </div>
            </nav>
        ) 
    }
}

export default Navigation;
