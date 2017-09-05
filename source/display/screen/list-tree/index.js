import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ListTree from '../../component/tree/list';
import Summary from '../../component/tree/summary';
import RaiseData from '../../component/root/raise';
import CreateTree from '../../component/tree/create';

import TreeAction from '../../component/tree/connect/action-dispatcher';

class ScreenList extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			selectedTree: {},
			listTree: [],
			showSummary: false,
			showListTree: true,
			showRaiseModal: false,
			showCreateModal: false
		};

		this.setSuperState = this.setSuperState.bind(this);
		this.callSuperMethod = this.callSuperMethod.bind(this);
	}

	componentWillReceiveProps(newProps) {
		if (newProps.actionType === 'FIND-TREE') {
			this.setState({
				listTree: newProps.trees
			});
		}
	}

	componentWillMount() {
		this.findTree();
	}

	findTree(textSearch) {
		this.props.treeAction.findData(textSearch);
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

	createNewTree(treeName) {
		this.context.router.replace({
			state: {
				name: treeName,
				value: {
					nemesis: [],
					faculties: [],
					properties: []
				}
			},
			pathname: 'edit-tree/null'
		});
	}

	render() {
		return (
			<div className="page-cover screen-list">
				<div className="page-content">
				</div>
				<div className="page-info">
					<ListTree
						visible={this.state.showListTree}
						listTree={this.state.listTree}
						setSuperState={this.setSuperState}
						callSuperMethod={this.callSuperMethod}
					/>
				</div>
				<div className="page-extend">
					<Summary
						visible={this.state.showSummary}
						treeData={this.state.selectedTree}
						setSuperState={this.setSuperState}
					/>
				</div>
				<div className="page-modal">
					<RaiseData
						visible={this.state.showRaiseModal}
						setSuperState={this.setSuperState}
						callSuperMethod={this.callSuperMethod}
					/>
					<CreateTree
						visible={this.state.showCreateModal}
						setSuperState={this.setSuperState}
						callSuperMethod={this.callSuperMethod}
					/>
				</div>
			</div>
		);
	}
}

ScreenList.contextTypes = {
	router: PropTypes.object.isRequired
};

function mapStateToProps(fullState, thisProps) {
	return fullState.tree;
}

const mapActionToProps = (dispatch) => {
	return {
		treeAction: new TreeAction(dispatch)
	}
}

export default connect(mapStateToProps, mapActionToProps)(ScreenList);
