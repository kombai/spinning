import React, { Component } from "react";
import PropTypes from "prop-types";

class Summary extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		if (!this.props.visible) return null;
		const { treeData } = this.props;
		return (
			<div className="content summary">
				{treeData.summary}
			</div>
		);
	}
}

Summary.contextTypes = {
	router: PropTypes.object.isRequired
};

Summary.propTypes = {
	visible: PropTypes.bool.isRequired,
	treeData: PropTypes.object,
	setSuperState: PropTypes.func.isRequired
};

export default Summary;
