import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router';

class ListTree extends Component {

	constructor(props, context) {
		super(props, context);

		this.findTree = this.findTree.bind(this);
	}

	showSummary(treeData) {
		this.props.setSuperState({
			showSummary: true,
			selectedTree: treeData
		});
	}

	createTree() {
		this.props.setSuperState({
			showSummary: false,
			showCreateModal: true
		});
	}

	fireData() {
		this.props.setSuperState({
			showSummary: false,
			showRaiseModal: true
		});
	}

	findTree(event) {
		this.props.callSuperMethod('findTree', [event.target.value]);
	}

	render() {
		if (!this.props.visible) return null;
		let listTree = this.props.listTree;

		return (
			<div className="list-tree">
				<div className="page-header">
					<div className="headding">
						<button className="pull-right btn btn-default" onClick={() => this.fireData()}>
							<i className="glyphicon glyphicon-fire"></i>
						</button>
						<h2>Spinning</h2>
					</div>
					<div className="form-group has-feedback">
						<input
							type="text"
							className="form-control"
							onChange={this.findTree}
							placeholder="search"
						/>
						<i className="glyphicon glyphicon-search form-control-feedback"></i>
					</div>
				</div>
				<div className="page-body">
				{
					listTree.map(function (item, index) {
						return (
							<div className="tree-item" key={item._id + "" + index} onMouseOver={() => this.showSummary(item)}>
								{
									item._id ?
										<Link className="tree-name" to={{ pathname: "result/", state: item }}>
											{item.name}
										</Link>
										:
										<Link className="tree-name">
											{item.name}
										</Link>
								}
								<Link className="edit-icon" to={{ pathname: "edit-tree/" + item._id, state: item }}>
									<span className="glyphicon glyphicon-pencil"></span>
								</Link>
							</div>
						);
					}.bind(this))
				}
				</div>
				<div className="page-footer">
					<button className="btn btn-flex btn-primary" onClick={() => this.createTree()}>Create</button>
				</div>
			</div>
		);
	}
}

ListTree.contextTypes = {
	router: PropTypes.object.isRequired
};

ListTree.propTypes = {
	visible: PropTypes.bool.isRequired,
	listTree: PropTypes.array.isRequired,
	setSuperState: PropTypes.func.isRequired,
	callSuperMethod: PropTypes.func.isRequired
};

export default ListTree;
