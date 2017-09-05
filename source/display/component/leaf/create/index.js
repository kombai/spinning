import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helper from '../../../../helper';

import LeafImage from './leaf-image';
import LeafSource from './leaf-source';

class CreateLeaf extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            leafType: 'none',
            waiting: false,
            leafName: '',
            imagePath: '',
            leafWidth: 0,
            leafHeight: 0,
            sourcePath: ''
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
        this.setImagePath = this.setImagePath.bind(this);
        this.setSourcePath = this.setSourcePath.bind(this);
        this.clearLeafData = this.clearLeafData.bind(this);
    }

    clearLeafData() {
        this.setState({
            leafType: 'none',
            leafName: '',
            imagePath: '',
            sourcePath: '',
            imageWidth: 0,
            imageHeight: 0
        });
    }

    onTextChange(event) {
        let leafName = event.target.value;
        this.setState({
            leafName: leafName
        });
    }

    setImagePath(value) {

        this.setState({
            waiting: true,
            imagePath: value,
            selectedLeaf: null // create new leaf
        });

        if (value.trim()) {
            var ni = new Image();
            ni.src = value;
            ni.onload = (function () {
                this.setState({
                    waiting: false,
                    leafWidth: ni.width,
                    leafHeight: ni.height
                });
            }).bind(this);
        }
    }

    setSourcePath(value) {
        this.setState({
            sourcePath: value
        });
    }

    onTypeChange(event) {
        let leafType = event.target.value;
        this.setState({
            leafType: leafType
        });
    }

    create() {

        let { sourcePath, imagePath, leafName, leafWidth, leafHeight } = this.state;

        leafName = leafName.toString().trim();
        // require the name for new leaf;
        if (!leafName) return;

        // create new leaf;

        let leafId = Helper.getGUID();
        let leafType = 'none';
        let leafValue = '';

        if (imagePath) {
            leafType = 'image';
            leafValue = leafId.replace(/-/g, "/") + ".png";
        } else if (sourcePath) {
            leafType = 'source';
            leafValue = sourcePath;
        } else {
            leafValue = leafName;
        }

        const selectedLeaf = {
            name: leafName,
            _id: leafId,
            type: leafType,
            value: leafValue,
            width: leafWidth,
            height: leafHeight
        };

        // insert new leaf;
        this.props.setSuperState({
            selectedLeaf: selectedLeaf
        });

        this.props.callSuperMethod('saveLeaf', [selectedLeaf, imagePath]);
    }

    cancel() {
        this.props.setSuperState({
            showCreateLeaf: false
        });
    }

    render() {
        if (this.props.visible === false) return null;
        const leafName = this.state.leafName;
        const require = leafName ? '' : 'require';

        return (
            <div className="create-leaf">
                <div className="content">
                    <div className="page-header">
                        <div className="heading">
                            <div className="big-text">Leaf name</div>
                        </div>
                        <div className="has-feedback">
                            <input type="text"
                                className={"form-control " + require}
                                value={leafName}
                                onChange={this.onTextChange}
                                placeholder={"Enter a new name or remove it !"}
                            />
                            {
                                leafName ?
                                    <i className="glyphicon glyphicon-remove form-control-feedback" onClick={this.clearLeafData}></i>
                                    :
                                    null
                            }
                        </div>
                    </div>
                    <div className="page-body">
                        <div className="form-group">
                            <div className="type-group">
                                <label className="leaf-label">Type : </label>

                                <label className="radio-inline">
                                    <input type="radio" value="none" checked={this.state.leafType === 'none'} onChange={this.onTypeChange} />None
								</label>

                                <label className="radio-inline">
                                    <input type="radio" value="image" checked={this.state.leafType === 'image'} onChange={this.onTypeChange} />Image
								</label>

                                <label className="radio-inline">
                                    <input type="radio" value="source" checked={this.state.leafType === 'source'} onChange={this.onTypeChange} />Source
								</label>
                            </div>
                        </div>

                        <div className="form-group">
                        {
                            this.state.leafType === "image" ?
                                <LeafImage imagePath={this.state.imagePath} setImagePath={this.setImagePath} />
                                :
                                null
                        }
                        {
                            this.state.leafType === "source" ?
                                <LeafSource sourcePath={this.state.sourcePath} setSourcePath={this.setSourcePath} />
                                :
                                null
                        }
                        </div>
                    </div>
                    <div className="page-footer">
                        <button className="btn btn-lg pull-left" onClick={() => this.cancel()}>Cancel</button>
                        {
                            !this.state.waiting ?
                                leafName ?
                                    <div className="pull-right">
                                        <button className="btn btn-lg btn-primary" onClick={() => this.create()}>Create</button>
                                    </div>
                                    :
                                    null
                                :
                                <div className="pull-right">Waiting..</div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

CreateLeaf.propTypes = {
    visible: PropTypes.bool.isRequired,
    setSuperState: PropTypes.func.isRequired,
    callSuperMethod: PropTypes.func.isRequired
};

export default CreateLeaf;
