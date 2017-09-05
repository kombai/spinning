import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Helper from "../../../../helper";

class ListTwig extends Component {

	render() {
        const { title, twigs, term } = this.props;
        let panelColor = '';

        if (!twigs.length) return null;

        if (term === 'properties') {
            panelColor = 'panel panel-info';
        } else if (term === 'faculties') {
            panelColor = 'panel panel-success';
        } else {
            panelColor = 'panel panel-warning';
        }

		return (
            <div className="branch">
                <div className="heading">
                    <div className="big-text">{title}</div>
                </div>
    			{
    				twigs.map(function(twig, twigIndex) {
                        if (!twig) return null;
                        const leaves = twig.value || [];
    					return (
    						<div key={twigIndex} className={panelColor}>
    							<div className="panel-heading">
                                    <div className="twig-name">{twig.name}</div>
                                </div>
                                {
                                    leaves.map(function (leaf, leafIndex) {
                                        if (!leaf) return null;
                                        return (
                                            <div key={leafIndex + (leaf._id || Helper.getGUID())} className='list-group-item'>
                                                <div className="leaf-content">
                                                    {
                                                        leaf.type === 'image' ?
                                                            <img className="photo" src={Helper.getImagePath(leaf.value)} width="100%" />
                                                            :
                                                            <div className="leaf-value pull-right">{leaf.value}</div>
                                                    }
                                                    <div className="leaf-name">{leaf.name}</div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
    						</div>
    					);
    				}.bind(this))
    			}
            </div>
		);
	}
}


ListTwig.propTypes = {
    title: PropTypes.string,
    term: PropTypes.string,
    twigs: PropTypes.array
};

export default ListTwig;
