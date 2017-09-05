import React, { Component } from "react";
import PropTypes from "prop-types";

import ListTwig from './list-twig';

class EditTree extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			treeName: '',
			treeData: {}
		};

		this.onTextChange = this.onTextChange.bind(this);
		this.previewGrove = this.previewGrove.bind(this);
	}

	componentWillReceiveProps(newProps) {
		const { treeData } = newProps;
		this.setState({
			treeData: treeData,
			treeName: treeData.name
		});
	}

	onTextChange(event) {
		const treeName = event.target.value;
		const { treeData } = this.state;
		this.setState({
			treeName: treeName
		});
		treeData.name = treeName;
	}

	clearName() {
		this.setState({
			treeName: ''
		});
	}

	removeTree() {
		this.props.callSuperMethod('removeTree');
	}

	saveTree() {
		const selectedTree = this.state.treeData;
		this.props.setSuperState({
			selectedTree: selectedTree
		});
		this.props.callSuperMethod('saveTree', [selectedTree]);
	}

	previewGrove() {
		this.props.setSuperState({
			selectedTree: this.state.treeData
		});
		this.props.callSuperMethod('previewGrove');
	}

	render() {
		const { treeData, treeName } = this.state;
		const require = treeName ? '' : 'require';
		const treeValue = treeData.value || {};

		return (
			<div className="content edit-tree">
				<div className="page-body">
					<div className="form-group">
						<div className="heading">
							<div className="big-text">Tree name</div>
						</div>
						<div className="has-feedback">
							<input
								type="text "
								className={"form-control " + require}
								value={treeName}
								onChange={this.onTextChange}
								placeholder={"Enter a new name or remove it !"}
							/>
							{
								treeName ?
									<i className="glyphicon glyphicon-remove form-control-feedback" onClick={() => this.clearName()}></i>
									:
									null
							}
						</div>
					</div>
					<ListTwig
						title="Properties"
						type="properties"
						twigs={treeValue.properties}
						setSuperState={this.props.setSuperState}
						callSuperMethod={this.props.callSuperMethod}
					/>

					<ListTwig
						title="Faculties"
						type="faculties"
						twigs={treeValue.faculties}
						setSuperState={this.props.setSuperState}
						callSuperMethod={this.props.callSuperMethod}
					/>

					<ListTwig
						title="Nemesis"
						type="nemesis"
						twigs={treeValue.nemesis}
						setSuperState={this.props.setSuperState}
						callSuperMethod={this.props.callSuperMethod}
					/>
				</div>

				<div className="page-footer">
					<button className="btn btn-sm pull-left" onClick={() => this.props.callSuperMethod('goBack')}>Cancel</button>
					{
						treeName ?
							<div className="btn-group pull-right">
								<button className="btn btn-sm btn-primary" onClick={() => this.previewGrove()}>Preview</button>
								<button className="btn btn-sm btn-primary" onClick={() => this.saveTree()}>
									<span className="glyphicon glyphicon-ok"></span>
								</button>
							</div>
							:
							<div className="pull-right">
								<button className="btn btn-sm btn-danger" onClick={() => this.removeTree()}>Delete</button>
							</div>
					}
				</div>
			</div>
		);
	}
}

EditTree.contextTypes = {
	router: PropTypes.object.isRequired
};

EditTree.propTypes = {
	visible: PropTypes.bool.isRequired,
	treeData: PropTypes.object,
	setSuperState: PropTypes.func.isRequired,
	callSuperMethod: PropTypes.func.isRequired
};

export default EditTree;
