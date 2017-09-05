import React, { Component } from "react";
import PropTypes from "prop-types";

class CommonScreen extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div className="page-cover">
				<h1>Common Screen</h1>
			</div>
		);
	}
}

CommonScreen.contextTypes = {
	router: PropTypes.object.isRequired
};

export default CommonScreen;
