import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateTree extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            treeName: ''
        };

        this.onKeyUp = this.onKeyUp.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    onKeyUp(event) {
        const treeName = this.state.treeName;
        if (event.keyCode === 13 && treeName) {
            this.creating();
        } else if (event.keyCode === 27) {
            this.setState({
                treeName: ''
            });
        }
    }

    onTextChange(event) {
        this.setState({
            treeName: event.target.value
        });
    }

    cancel() {
        this.setState({
            treeName: ''
        });

        this.props.setSuperState({
            showCreateModal: false
        });
    }

    creating() {
        const { treeName } = this.state;
        this.props.callSuperMethod('createNewTree', [treeName]);
    }

    render() {
        if (!this.props.visible) return null;

        let treeName = this.state.treeName;
        let require = treeName ? '' : 'require';

        return (
            <div className="create-tree">
                <div className="content">
                    <div className="modal-body">
                        <h3>Tree name</h3>
                        <div className="has-feedback">
                            <input type="text"
                                className={"form-control " + require}
                                value={treeName}
                                onKeyUp={this.onKeyUp}
                                onChange={this.onTextChange}
                                ref={input => input && input.focus()}
                                placeholder={"Enter a new name"}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn pull-left" onClick={() => this.cancel()}>Close</button>
                        <button className={"btn btn-primary pull-right" + (treeName ? "" : " disabled")} onClick={() => this.creating()}>Create</button>
                    </div>
                </div>
            </div>
        );
    }
}

CreateTree.propTypes = {
    visible: PropTypes.bool.isRequired,
    setSuperState: PropTypes.func.isRequired,
    callSuperMethod: PropTypes.func.isRequired
};

export default CreateTree;
