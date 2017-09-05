import React, { Component } from 'react';
import PropTypes from 'prop-types';
const fs = electronRequire('fs-extra');
import Helper from '../../../../helper';

class ListTwig extends Component {

	constructor(props, context) {
		super(props, context);

		// binding event;
		this.onTextChange = this.onTextChange.bind(this);
	}

	onTextChange(event) {
		let textValue = event.target.value;
		this.props.callSuperMethod('findTwig', [textValue]);
	}

	selectTwig(twig) {
		this.props.setSuperState({
			showEditTwig: true,
			showListTwig: false,
			selectedTwig: Object.assign({}, twig)
		});
	}

	createTwig() {
		this.props.setSuperState({
			showEditTwig: true,
			showListTwig: false,
			selectedTwig: {
				name: '',
				type: '',
				value: []
			}
		});
	}

	cancel() {
		this.props.setSuperState({
			showListTwig: false
		});
	}

	render() {
		if (this.props.visible === false) return null;
		let listTwig = this.props.listTwig || [];

		return (
			<div className="list-twig">
				<div className="content">
					<div className="page-header">
						<div className="heading">
							<div className="big-text">Select twig</div>
							<button className="btn btn-default" onClick={() => this.createTwig()}>Create new</button>
						</div>
						<div className="has-feedback">
							<input
								type="text"
								onChange={this.onTextChange}
								className="form-control"
								placeholder="search"
							/>
							<i className="glyphicon glyphicon-search form-control-feedback"></i>
						</div>
					</div>
					<div className="grid-twig">
						{
							// list twig;
							listTwig.map(function (twig, twigIndex) {
								let twigStyle = "twig";
								return (
									<div key={twigIndex + "-" + twig._id} className={twigStyle} onClick={() => this.selectTwig(twig)}>
										<div className="select-name">{twig.name}</div>
										<div className="select-value">
											{twig.value.length}<span className="glyphicon glyphicon-leaf"></span>
										</div>
									</div>
								);
							}.bind(this))
						}
					</div>
					<div className="page-footer">
						<button className="btn btn-lg pull-left" onClick={() => this.cancel()}>Cancel</button>
					</div>
				</div>
			</div>
		);
	}
}

ListTwig.propTypes = {
	visible: PropTypes.bool.isRequired,
	listTwig: PropTypes.array,
	setSuperState: PropTypes.func.isRequired,
	callSuperMethod: PropTypes.func.isRequired
};

export default ListTwig;
