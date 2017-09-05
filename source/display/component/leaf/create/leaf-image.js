import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helper from '../../../../helper';

class LeafImage extends Component {

  constructor(props, context) {
    super(props, context);
    
    this.state = {
      width: 0,
      height: 0,
      needHelp: true,
      imagePath: props.imagePath
    };

    //biding event;
    this.selectImage = this.selectImage.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      imagePath: newProps.imagePath
    });
  }

  selectImage() {
    let showDialog = electronRemote.dialog.showOpenDialog;
    showDialog({
      filters: [
        { name: 'Images', extensions: ['jpg', 'png'] }
      ]
    }, function (fileNames) {
      if (fileNames && fileNames.length) {
        this.state.needHelp = false;
        this.props.setImagePath(fileNames[0]);
      }
    }.bind(this));
  }

  removeImage() {
    this.props.setImagePath('');
  }

  onTextChange(event) {
    let imagePath = event.target.value;
    this.setState({
      needHelp: false,
    });
    this.props.setImagePath(imagePath.trim());
  }

  render() {
    let imagePath = this.props.imagePath;
    if (imagePath && this.state.needHelp) {
      imagePath = Helper.getImagePath(imagePath);
    }
    const content = <img src={imagePath} width="100%" />;
    const editSource = this.state.imagePath ? true : false;

    return (
      <div className="create-image">
        <div className="input-group">
          <input type="text" className="form-control" value={this.state.imagePath} onChange={this.onTextChange} readOnly={editSource} />
          <div className="input-group-btn" >
            <button className="btn btn-success" onClick={this.selectImage}>Select photo</button>
            <button className="btn btn-danger" onClick={this.removeImage}><span className="glyphicon glyphicon-remove"></span></button>
          </div>
        </div>
        {
          imagePath ?
            <div className="leaf-image">
              {content}
            </div>
            :
            null
        }
      </div>
    );
  }
}

LeafImage.propTypes = {
  imagePath: PropTypes.string,
  setImagePath: PropTypes.func
}

export default LeafImage;
