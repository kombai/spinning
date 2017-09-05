import React, { Component } from "react";
import PropTypes from "prop-types";
import Helper from "../../../helper";
import GroveResult from '../../component/grove/result';

class ScreenResult extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			selectedTree: null
		};

		this.setSuperState = this.setSuperState.bind(this);
		this.callSuperMethod = this.callSuperMethod.bind(this);
	}

	componentDidMount() {
		const location = this.props.location;
		this.setState({
			selectedTree: location.state
		});
	}

	goBack() {
		const { selectedTree } = this.state;
		this.context.router.replace({
			state: selectedTree,
			pathname: 'list-tree'
		});
	}

	setSuperState(updater) {
		this.setState(updater);
	}

	callSuperMethod(method, params) {
		if (this[method]) {
			setTimeout(() => {
				this[method].apply(this, params);
			}, 0);
		}
	}

	render() {
		return (
			<div className="page-cover screen-result">
				<div className="page-content">
					<GroveResult
						treeData={this.state.selectedTree}
						callSuperMethod={this.callSuperMethod}
					/>
				</div>
				<div className="page-info">
				</div>
				<div className="page-extend">
				</div>
			</div>
		);
	}
}

ScreenResult.contextTypes = {
	router: PropTypes.object.isRequired
};

export default ScreenResult;
