import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helper from "../../../../helper";


class ListLeaf extends Component {

    constructor(props) {
        super(props);
        this.state = {
            twigData: [],
            twigIndex: 0
        };
    }

    componentWillMount() {
        let { twigData, twigIndex } = this.props;

        this.setState({
            twigData: twigData,
            twigIndex: twigIndex
        });
    }

    render() {
        const { twigData, twigIndex } = this.state;
        return (
            <div className="panel panel-success">
                <div className="panel-heading">{ twigIndex }</div>
                {
                    twigData.length ?
                        twigData.map(function (leaf, leafIndex) {
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
                        :
                        <div className="list-group-item">
                            Processing
                        </div>
                }
            </div>
        )
    }
}

ListLeaf.propTypes = {
    twigData: PropTypes.array,
    twigIndex: PropTypes.number
};

export default ListLeaf;
