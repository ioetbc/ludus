import React, { Component } from 'react';

import './App.scss';
import Contact from './components/Contact';

class App extends Component {
	constructor(props) {	
		super(props);
		this.state = { contactScreen: false }
		this.handleContact = this.handleContact.bind(this);
	}

	handleContact() {
		this.setState({ contactScreen: !this.state.contactScreen });
	}

	render() {
		const { contactScreen } = this.state;
		return (
			<div className="App">
				
				{contactScreen &&
					<Contact
						handleContact={this.handleContact}
					/>
				}
				<main className="video" onClick={contactScreen && this.handleContact}>
					<iframe src="https://player.vimeo.com/video/361729778?autoplay=1&loop=1&color=e9edef&badge=0" style={{ width: '100%', height: '100vh', pointerEvents: 'none' }} frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
					</iframe>
					<script src="https://player.vimeo.com/api/player.js"></script>
				</main>

				<nav>
					<div className="nav-top">
						<p>A group of creatives that develop brands using design, animation and videography.</p>
						<p onClick={this.handleContact}>contact</p>
					</div>
					<div className="nav-bottom">
						<p>logo</p>
						<p>website in development</p>
					</div>
				</nav>

			</div>
		);
	}
}

export default App;
