import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Action from './action';
import ListLeaf from './list-leaf';

class GroveResult extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            treeData: {},
            listTwig: [],
            pageSize: 100,
            currentPage: 0,
            showMoreButton: true
        };

        this.renderTwig = this.renderTwig.bind(this);
    }

    componentWillReceiveProps(newProps) {
        let { properties } = newProps.treeData.value;
        let { currentPage, pageSize } = this.state;
        let useService = [];


        if (!this.action) {
            this.action = new Action(properties, pageSize);
        }

        this.setState({
            listTwig: this.action.getListTwig(currentPage * pageSize),
            treeData: newProps.treeData
        });
    }

    viewMore() {
        let { currentPage, pageSize } = this.state;
        let listTwig = this.action.getListTwig(++currentPage * pageSize);
        if (listTwig.length) {
            this.setState({
                listTwig: listTwig,
                currentPage: currentPage
            });
        } else {
            this.setState({
                showMoreButton: false
            });
        }
    }

    goBack() {
        this.props.callSuperMethod('goBack');
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
        const { selectedService, currentPage, pageSize, treeData } = this.state;
        const displayTwig = [...this.state.listTwig];
        const renderTwig = this.renderTwig;

        return (
            <div className="result-view">
                <div className="content">
                    <div className="page-header">
                        <div className="heading">
                            <div className="current-page">Page {currentPage + 1}</div>
                            <div className="big-text">{treeData.name}</div>
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
                        <button className="btn btn-lg pull-left" onClick={() => this.goBack()}>Back</button>
                        {
                            this.state.showMoreButton ?
                                <button className="btn btn-lg btn-primary pull-right" onClick={() => this.viewMore()}>View More</button>
                                :
                                null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

GroveResult.propTypes = {
    treeData: PropTypes.object,
    callSuperMethod: PropTypes.func.isRequired
};

export default GroveResult;
