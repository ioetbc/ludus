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

				<div class="video-container" >
					<div class="video-foreground">
						<iframe
							width="100%"
							height="100%"
							src="https://www.youtube.com/embed/tBUtXF5tOwg?autoplay=1"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
							allow="autoplay"
						></iframe>
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
