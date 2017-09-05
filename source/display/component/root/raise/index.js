import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Helper from '../../../../helper';
import ListTwig from './list-twig';
import rootData from '../connect/data';
import rootAction from '../connect/action';

class RaiseData extends Component {

	constructor(props) {
		super(props);

		this.state = {
			finished: false,
			treeData: rootData
		};
	}

	createTwig(type, listTwig) {
		const { getGUID } = Helper;
		const leafName = {};

        listTwig.forEach(function(twig, index) {
            twig._id = getGUID();
            twig.type = type;
            twig.value.map((item, index) => {
				let leaf = {
					name: item.name,
					_id: getGUID(),
					type: 'none',
					value: item.value
				}
				// keep the leaf is uniquie;
				if (!leafName[item.name]) {
					leafName[item.name] = true;
                	rootAction.insertLeaf(leaf);
				}

                return leaf;
            });
			// create new twig;
			rootAction.insertTwig(twig);
        });

		this.setState({
            finished: true
        });
    }

    regenerate() {
		const { treeData } = this.state;
        // clear the old data;
        rootAction.resetStoreData(
			function() {
				// raising new data;
				this.createTwig("faculties", treeData.value.faculties);
	            this.createTwig("properties", treeData.value.properties);
	        }.bind(this)
		);
    }

    cancel() {
        this.props.setSuperState({
            showRaiseModal: false
        });
    }

	close() {
		setTimeout(function() {
			window.location.reload();
		}.bind(this), 345);
	}

	render() {
	    if (this.props.visible === false) return null;
		const { treeData } = this.state;

		return (
			<div className="raise-data">
                <div className="content">
                    <div className="page-header">
                        <div className="big-text">Regenerate Data</div>
                    </div>
					{
						this.state.finished ?
							<div className="page-body">
								<div className="alert alert-success">
	                                Well done! Successfully imported the root data.
	                            </div>
							</div>
							:
							<div className="page-body">
								<ListTwig
									title="Properties"
									term="properties"
									twigs={treeData.value.properties}
								></ListTwig>

								<ListTwig
									title="Faculties"
									term="faculties"
									twigs={treeData.value.faculties}
								></ListTwig>
							</div>
					}
					{
						this.state.finished ?
							<div className="page-footer">
								<button className="btn btn-lg btn-info btn-flex" onClick={() => this.close()}>Close</button>
							</div>
							:
							<div className="page-footer">
	                    		<button className="btn btn-lg pull-left" onClick={() => this.cancel()}>Cancel</button>
	                    		<button className="btn btn-lg btn-primary pull-right" onClick={() => this.regenerate()}>Regenerate</button>
							</div>
					}
                </div>
			</div>
		);
	}
}

RaiseData.propTypes = {
    visible: PropTypes.bool.isRequired,
    setSuperState: PropTypes.func.isRequired,
    callSuperMethod: PropTypes.func.isRequired
};

export default RaiseData;
