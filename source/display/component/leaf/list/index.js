import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helper from '../../../../helper';

class ListLeaf extends Component {

  constructor(props, context) {
    super(props, context);

    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange(event) {
    let textValue = event.target.value;
    this.props.callSuperMethod('findLeaf', [textValue]);
  }

  createLeaf() {
    this.props.setSuperState({
      showListLeaf: false,
      showCreateLeaf: true
    });
  }

  selectLeaf(leaf) {
    this.props.setSuperState({
      selectedLeaf: leaf
    });
    this.props.callSuperMethod('updateLeaf');
  }

  cancel() {
    this.props.setSuperState({
      showListLeaf: false
    });
  }

  render() {
    if (this.props.visible === false) return null;
    const listLeaf = this.props.listLeaf || [];

    return (
      <div className="list-leaf">
        <div className="content">
          <div className="page-header">
            <div className="heading">
              <button className="btn btn-default pull-right" onClick={() => this.createLeaf()}>Create new</button>
              <div className="big-text">Select leaf</div>
            </div>
            <div className="has-feedback">
              <input
                onChange={this.onTextChange}
                type="text"
                className="form-control"
                placeholder="search"
              />
              <i className="glyphicon glyphicon-search form-control-feedback"></i>
            </div>
          </div>
          <div className="page-body">
            {
              // list leaf;
              listLeaf.map(function (leaf, leafIndex) {
                const className = "thumbnail leaf-item";
                return (
                  <div key={leafIndex + (leaf._id || Helper.getGUID())} className={className}>
                    <div className="leaf-content" onClick={() => this.selectLeaf(leaf)}>
                      {
                        leaf.type === 'image' ?
                          <img className="photo" src={Helper.getImagePath(leaf.value)} width="100%" />
                          :
                          null
                      }
                      <div className="leaf-name">{leaf.name}</div>
                    </div>
                  </div>
                );
              }.bind(this))
            }
          </div>
          <div className="page-footer">
            <button className="btn btn-lg pull-left" onClick={() => this.cancel()}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

ListLeaf.propTypes = {
  visible: PropTypes.bool.isRequired,
  listLeaf: PropTypes.array,
  setSuperState: PropTypes.func.isRequired,
  callSuperMethod: PropTypes.func.isRequired
};

export default ListLeaf;
