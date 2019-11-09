import React, { Component } from 'react';

import './App.scss';
import Video from './components/Video';
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
		return (
			<div className="App">
				<div class="slice">
					<div data-loader="rectangle"></div>
				</div>

				<Contact
					handleContact={this.handleContact}
					contactScreen={this.state.contactScreen}
				/>
				<Video
					handleContact={this.handleContact}
					contactScreen={this.state.contactScreen}
				/>

				<Navigation
					handleContact={this.handleContact}
					contactScreen={this.state.contactScreen}
				/>
			</div>
		);
	}
}



export default App;


