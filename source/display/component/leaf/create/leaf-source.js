import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helper from '../../../../helper';

class LeafSource extends Component {

    selectSource() {
        let showDialog = electronRemote.dialog.showOpenDialog;
        showDialog({
            properties: ['openFile', 'openDirectory']
        }, function (sourcePath) {
            if (sourcePath && sourcePath.length) {
                    console.log('sourcePath', sourcePath);
                this.props.setSourcePath(sourcePath[0]);
            }
        }.bind(this));
    }

    removeSource() {
        this.props.setSourcePath("");
    }

    render() {

        return (
            <div className="create-source">
                <div className="input-group">
                    <input type="text" className="form-control" value={this.props.sourcePath} readOnly={true} />
                    <div className="input-group-btn" >
                        <button className="btn btn-success" onClick={() => this.selectSource()}>Select source</button>
                        {
                            this.props.sourcePath ?
                                <button className="btn btn-danger" onClick={() => this.removeSource()}><span className="glyphicon glyphicon-remove"></span></button>
                                :
                                null
                        }
                    </div>
                </div>
                <div className="leaf-source"></div>
            </div>
        );
    }
}

LeafSource.propTypes = {
    sourcePath: PropTypes.string,
    setSourcePath: PropTypes.func
};

export default LeafSource;
