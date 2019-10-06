import React, { Component } from 'react';
import Logo from '../images/logo/logo-white.svg';
import Menu from '../images/icon/mobile-menu.svg';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = { openMenu: false }

        this.handleHamburger = this.handleHamburger.bind(this);
    }

    handleHamburger() {
        this.setState({ openMenu: !this.state.openMenu })
    }

    render() {
        const { contactScreen, handleContact } = this.props;
        const { openMenu } = this.state;

        console.log('openMn', openMenu)

        return (
            <nav>
                <div className="nav-desktop" style={{ right: contactScreen ? '50vw' : '0vw', transition: 'right .5s ease-in-out' }}>
                    <div className="nav-top">
                        <p>A group of creatives that develop brands using design, animation and videography.</p>
                        <p onClick={handleContact} style={{ cursor: 'pointer' }}>Contact</p>
                    </div>
                <div className="nav-bottom">
                    <img style={{ width: '150px' }} src={Logo} alt="ludus logo" />
                    <p>Website in development</p>
                </div>
                </div>
                    <div className="nav-mobile">
                        <div className="nav-menu" style={{ height: openMenu ? '200px' : '100px' }}>
                            <img style={{ width: '150px', height: '50px' }} src={Logo} alt="ludus logo" />
                            <img style={{ cursor: 'pointer', width: '30px', marginTop: '13px' }} src={Menu} onClick={this.handleHamburger} alt="menu"/>
                        </div>
                        {openMenu &&
                            <ul>
                                <li>fwojfowf</li>
                                <li>fwojfowf</li>
                                <li>fwojfowf</li>
                                <li>fwojfowf</li>
                                <li>fwojfowf</li>
                            </ul>
                        }
                </div>
            </nav>
        )
    }
}

export default Navigation;
