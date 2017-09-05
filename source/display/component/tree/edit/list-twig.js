import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListTwig extends Component {

    constructor(props, context) {
        super(props, context);
    }

    editTwig(twigIndex) {
        const { twigs, type } = this.props;
        if (twigIndex < 0) {
            this.props.setSuperState({
                twigIndex: twigIndex,
                twigType: type,
                showListTwig: true,
                selectedTwig: null
            });
            // find exist twig by type;
            this.props.callSuperMethod('findTwig', [type, true]);
        } else {
            this.props.setSuperState({
                twigIndex: twigIndex,
                twigType: type,
                showEditTwig: true,
                selectedTwig: twigs[twigIndex]
            });
        }
    }

    render() {
        let twigs = this.props.twigs || [];
        let type = this.props.type;
        let panelColor = '';

        if (type === 'properties') {
            panelColor = 'panel panel-info';
        } else if (type == 'faculties') {
            panelColor = 'panel panel-success';
        } else if (type == 'nemesis') {
            panelColor = 'panel panel-warning';
        } else {
            panelColor = 'panel panel-danger';
        }

        return (
            <div className={panelColor}>
                <div className="panel-heading">
                    <span>{this.props.title}</span>
                    <span
                        className="pull-right glyphicon glyphicon-plus"
                        onClick={() => this.editTwig(-1)}
                    ></span>
                </div>
                {
                    twigs.length ? twigs.map(function (twig, twigIndex) {
                        return (
                            <div key={twigIndex} className="list-group-item">
                                <div className="twig-name" onClick={() => this.editTwig(twigIndex)}>
                                    {twig.name}
                                </div>
                            </div>
                        );
                    }.bind(this)) : null
                }
            </div>
        );
    }
}

ListTwig.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    twigs: PropTypes.array,
    setSuperState: PropTypes.func.isRequired,
    callSuperMethod: PropTypes.func.isRequired
};

export default ListTwig;
