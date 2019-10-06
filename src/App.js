import React, { Component } from 'react';

import './App.scss';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

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
				<Contact
					handleContact={this.handleContact}
					contactScreen={this.state.contactScreen}
				/>
				<main className="video" onClick={contactScreen && this.handleContact}>
					{/* <iframe src="https://player.vimeo.com/video/361729778?autoplay=1&loop=1&color=e9edef&badge=0" style={{ width: '100%', height: '100vh', pointerEvents: 'none' }} frameborder="0" allow="autoplay; fullscreen" allowfullscreen>
					</iframe>
					<script src="https://player.vimeo.com/api/player.js"></script> */}
				</main>
				<Navigation
					handleContact={this.handleContact}
					contactScreen={this.state.contactScreen}
				/>
			</div>
		);
	}
}

export default App;
