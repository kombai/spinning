import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Action from './action';
import ListLeaf from './list-leaf';

class GroveDemo extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            listTwig: [],
            pageSize: 100,
            currentPage: 0,
            selectedService: null
        };

        this.renderTwig = this.renderTwig.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.visible) {
            const { properties } = newProps.treeData.value;
            const { currentPage, pageSize } = this.state;

            this.action = new Action(properties, 100);
            this.setState({
                listTwig: this.action.getListTwig(currentPage * pageSize)
            });
        }
    }

    cancel() {
        this.props.setSuperState({
            showGroveDemo: false
        });
    }

    saveTree() {
        const selectedTree = this.props.treeData;
        this.props.callSuperMethod('saveTree', [selectedTree]);
    }

    renderTwig(twigData, twigIndex) {
        return (
            <ListLeaf
                twigData={twigData}
                key={twigIndex}
                twigIndex={twigIndex}
            />
        )
    }

    render() {
        if (this.props.visible === false) return null;

        const { selectedService, currentPage, pageSize, treeData } = this.state;
        const displayTwig = [...this.state.listTwig];
        const renderTwig = this.renderTwig;

        return (
            <div className="result-view">
                <div className="content">
                    <div className="page-header">
                        <div className="heading">
                            <div className="big-text">Preview</div>
                        </div>
                    </div>
                    <div className="page-body">
                    {
                        displayTwig.map(function (twigData, index) {
                            const twigIndex = currentPage * pageSize + index + 1;
                            return twigData ? renderTwig(twigData, twigIndex) : null;
                        })
                    }
                    </div>
                    <div className="page-footer">
                        <button className="btn btn-lg pull-left" onClick={() => this.cancel()}>Close</button>
                        <button className="btn btn-lg btn-primary pull-right" onClick={() => this.saveTree()}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

GroveDemo.propTypes = {
    visible: PropTypes.bool.isRequired,
    treeData: PropTypes.object,
    setSuperState: PropTypes.func.isRequired,
    callSuperMethod: PropTypes.func.isRequired
}

export default GroveDemo;
