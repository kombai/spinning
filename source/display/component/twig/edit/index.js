import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helper from '../../../../helper';

class EditTwig extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			twigName: '',
			twigData: {},
			leafIndex: -1
		};

		this.onTextChange = this.onTextChange.bind(this);
	}

	componentWillReceiveProps(newProps) {
		const { twigData } = newProps;

		if (twigData) {
			this.setState({
				twigData: twigData,
				twigName: twigData.name
			});
		}
	}

	onTextChange(event) {
		const twigName = event.target.value;
		const { twigData } = this.state;
		twigData.name = twigName;

		this.setState({
			twigName: twigName
		});

		this.props.setSuperState({
			selectedTwig: twigData
		});
	}

	clearTwigName() {
		this.setState({
			twigName: ''
		});
	}

	changeTwig() {
		const { twigType } = this.props;
		this.props.setSuperState({
			showListTwig: true
		});
		this.props.callSuperMethod('findTwig', [twigType, true]);
	}

	updateTwig() {
		const { twigData, twigName } = this.state;
		twigData.name = twigName;

		this.props.setSuperState({
			selectedTwig: twigData
		});
		this.props.callSuperMethod('updateTwig');
	}

	removeTwig() {
		this.props.callSuperMethod('removeTwig');
	}

	createLeaf() {
		this.props.setSuperState({
			leafIndex: -1,
			showCreateLeaf: true
		});
	}

	changeLeaf(index) {
		this.setState({
			leafIndex: index
		});

		this.props.setSuperState({
			leafIndex: index,
			showListLeaf: true
		});

		this.props.callSuperMethod('findLeaf');
	}

	removeLeaf(leafIndex) {
		const { twigData } = this.state;
		twigData.value.splice(leafIndex, 1);

		this.setState({
			twigData: twigData
		});
	}

	cancel() {
		this.props.setSuperState({
			showEditTwig: false
		});
	}

	render() {
		if (this.props.visible === false) return null;
		const { twigData, twigName } = this.state;
		const listLeaf = twigData.value || [];
		const require = twigName ? '' : 'require';

		return (
			<div className="edit-twig">
				<div className="content">
					<div className="page-body">
						<div className="heading">
							<button className="btn btn-default pull-right" onClick={() => this.changeTwig()}>Change</button>
							<div className="big-text">Twig name</div>
						</div>
						<div className="has-feedback">
							<input type="text"
								className={"form-control " + require}
								value={twigName}
								onChange={this.onTextChange}
								placeholder={"Enter a new name or remove it !"}
							/>
							{
								twigName ?
									<i className="glyphicon glyphicon-remove form-control-feedback" onClick={() => this.clearTwigName()}></i>
									:
									null
							}
						</div>
						{
							this.props.twigType === 'properties' ?
								<div className="create-btn">
									<button className="btn btn-flex btn-primary" onClick={() => this.createLeaf()}>Create new</button>
									<button className="btn btn-flex btn-info" onClick={() => this.changeLeaf(-1)}>Add leaf</button>
								</div>
								:
								null
						}
						{
							listLeaf.map(function (leaf, leafIndex) {
								let className = 'thumbnail leaf-item';
								if (this.state.leafIndex == leafIndex) {
									className += ' selected';
								}

								return (
									<div key={leafIndex + (leaf._id || Helper.getGUID())} className={className}>
										<div className="leaf-content" onClick={() => this.changeLeaf(leafIndex)}>
											{
												leaf.type === 'image' ?
													<img className="photo" src={Helper.getImagePath(leaf.value)} width="100%" />
													:
													null
											}
											<div className="leaf-name">{leaf.name}</div>
										</div>
										<div className="remove-leaf" onClick={() => this.removeLeaf(leafIndex)}>
											<i className="glyphicon glyphicon-minus"></i>
										</div>
									</div>
								);
							}.bind(this))
						}
					</div>
					<div className="page-footer">
						<button className="btn pull-left" onClick={() => this.cancel()}>Cancel</button>
						{
							twigName ?
								<div className="pull-right">
									<button className="btn btn-primary" onClick={() => this.updateTwig()}>Apply</button>
								</div>
								:
								<div className="pull-right">
									<button className="btn btn-danger" onClick={() => this.removeTwig()}>Delete</button>
								</div>
						}
					</div>
				</div>
			</div>
		);
	}
}

EditTwig.contextTypes = {
	router: PropTypes.object.isRequired
};

EditTwig.propTypes = {
	visible: PropTypes.bool.isRequired,
	twigType: PropTypes.string,
	twigData: PropTypes.object,
	setSuperState: PropTypes.func.isRequired,
	callSuperMethod: PropTypes.func.isRequired
};

export default EditTwig;
