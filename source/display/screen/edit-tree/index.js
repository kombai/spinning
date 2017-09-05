import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Helper from '../../../helper';

import GroveDemo from '../../component/grove/result/demo';

import EditTree from '../../component/tree/edit';

import EditTwig from '../../component/twig/edit';
import ListTwig from '../../component/twig/list';

import ListLeaf from '../../component/leaf/list';
import CreateLeaf from '../../component/leaf/create';

import TreeAction from '../../component/tree/connect/action-dispatcher';
import TwigAction from '../../component/twig/connect/action-dispatcher';
import LeafAction from '../../component/leaf/connect/action-dispatcher';

class ScreenEdit extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			selectedTree: null,
			selectedTwig: null,
			selectedLeaf: null,
			rootIndex: -1,
			twigIndex: -1,
			leafIndex: -1,
			twigType: '',
			leafType: '',

			listTwig: [],
			listLeaf: [],

			showGroveDemo: false,

			showEditTree: false,

			showEditTwig: false,
			showListTwig: false,

			showListLeaf: false,
			showCreateLeaf: false,
		};

		this.saveTree = this.saveTree.bind(this);
		this.saveTwig = this.saveTwig.bind(this);
		this.saveLeaf = this.saveLeaf.bind(this);

		this.updateTwig = this.updateTwig.bind(this);
		this.updateLeaf = this.updateLeaf.bind(this);

		this.setSuperState = this.setSuperState.bind(this);
		this.callSuperMethod = this.callSuperMethod.bind(this);
	}

	componentWillReceiveProps(newProps) {
		const twigProp = newProps.twig;
		const leafProp = newProps.leaf;

		if (twigProp.actionType === 'FIND-TWIG') {
			this.setState({
				listTwig: twigProp.twigs
			});
		}

		if (leafProp.actionType === 'INSERT-LEAF') {
			this.updateLeaf();
		} else if (leafProp.actionType === 'FIND-LEAF') {
			this.setState({
				listLeaf: leafProp.leaves
			});
		}
	}

	componentDidMount() {
		const location = this.props.location;
		this.setState({
			selectedTree: location.state
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

	previewGrove() {
		this.setState({
			showGroveDemo: true
		});
	}

	saveTree(selectedTree) {
		const { treeAction } = this.props;

		if (selectedTree._id) {
			// edit tree;
			treeAction.update(selectedTree);
		} else {
			// create new;
			Object.assign(selectedTree, {
				_id: Helper.getGUID(),
				created: new Date().getTime()
			});
			treeAction.insert(selectedTree);
		}

		this.context.router.replace({
			state: selectedTree,
			pathname: 'list-tree'
		});
	}

	removeTree() {
		const { selectedTree } = this.state;
		const { treeAction } = this.props;

		treeAction.remove(selectedTree);

		this.context.router.replace({
			state: null,
			pathname: 'list-tree'
		});
	}

	saveTwig(selectedTwig) {
		const { twigAction } = this.props;
		twigAction.insert(selectedTwig);
	}

	findTwig(text, byType) {
		const { twigAction } = this.props;
		twigAction.findData(text, byType);
	}

	updateTwig() {
		const { selectedTree, selectedTwig, twigIndex, twigType } = this.state;

		// insert new twig;
		if (!selectedTwig._id) {
			selectedTwig._id = Helper.getGUID();
			selectedTwig.type = twigType;
			this.saveTwig(selectedTwig);
		}

		if (twigIndex < 0) {
			selectedTree.value[twigType].push(selectedTwig);
		} else {
			selectedTree.value[twigType][twigIndex] = selectedTwig;
		}

		this.setState({
			selectedTree: selectedTree,
			showEditTree: true,
			showEditTwig: false
		});
	}

	removeTwig() {
		const { selectedTree, selectedTwig, twigIndex, twigType } = this.state;

		if (twigIndex < 0) {
			this.setState({
				showEditTwig: false
			});
		} else {
			selectedTree.value[twigType].splice(twigIndex, 1);
			this.setState({
				selectedTree: selectedTree,
				showEditTwig: false
			});
		}
	}

	saveLeaf(selectedLeaf, imagePath) {
		const { leafAction } = this.props;
		leafAction.insert(selectedLeaf, imagePath);
	}

	findLeaf(text) {
		const { leafAction } = this.props;
		leafAction.findData(text);
	}

	updateLeaf() {
		const { selectedTwig, selectedLeaf, leafIndex } = this.state;

		if (leafIndex < 0) {
			selectedTwig.value.push(selectedLeaf);
		} else {
			selectedTwig.value[leafIndex] = selectedLeaf;
		}

		this.setState({
			selectedTwig: selectedTwig,
			showEditTwig: true,
			showListLeaf: false,
			showCreateLeaf: false
		});
	}

	goBack() {
		const { selectedTree } = this.state;
		this.context.router.replace({
			state: selectedTree,
			pathname: 'list-tree'
		});
	}

	render() {
		return (
			<div className="page-cover screen-edit">
				<div className="page-content"></div>
				<div className="page-info"></div>
				<div className="page-extend">
					<EditTree
						visible={this.state.showEditTree}
						treeData={this.state.selectedTree}
						setSuperState={this.setSuperState}
						callSuperMethod={this.callSuperMethod}
					/>
				</div>

				<div className="page-modal">
					<EditTwig
						visible={this.state.showEditTwig}
						twigType={this.state.twigType}
						twigData={this.state.selectedTwig}
						setSuperState={this.setSuperState}
						callSuperMethod={this.callSuperMethod}
					/>
				</div>

				<div className="page-modal">
					<ListTwig
						visible={this.state.showListTwig}
						listTwig={this.state.listTwig}
						setSuperState={this.setSuperState}
						callSuperMethod={this.callSuperMethod}
					/>
					<ListLeaf
						visible={this.state.showListLeaf}
						listLeaf={this.state.listLeaf}
						setSuperState={this.setSuperState}
						callSuperMethod={this.callSuperMethod}
					/>
					<GroveDemo
						visible={this.state.showGroveDemo}
						treeData={this.state.selectedTree}
						setSuperState={this.setSuperState}
						callSuperMethod={this.callSuperMethod}
					/>
				</div>

				<div className="page-modal">
					<CreateLeaf
						visible={this.state.showCreateLeaf}
						setSuperState={this.setSuperState}
						callSuperMethod={this.callSuperMethod}
					/>
				</div>
			</div>
		);
	}
}

ScreenEdit.contextTypes = {
	router: PropTypes.object.isRequired
};

function mapStateToProps(fullState, thisProps) {
	return Object.assign({}, fullState);
}

const mapActionToProps = (dispatch) => {
	return {
		treeAction: new TreeAction(dispatch),
		twigAction: new TwigAction(dispatch),
		leafAction: new LeafAction(dispatch)
	}
}

export default connect(mapStateToProps, mapActionToProps)(ScreenEdit);
