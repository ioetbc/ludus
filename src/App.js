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
				<main
					onClick={contactScreen && this.handleContact}
					className={`video ${this.state.contactScreen && 'show-contact'}`}
				>
					<div class="video-container" >
						<div class="video-foreground">
						</div>
					</div>
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
