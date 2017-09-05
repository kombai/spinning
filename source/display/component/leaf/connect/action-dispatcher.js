import Helper from '../../../../helper';
import dataStore from './store-data';

const https = electronRequire('https');
const fs = electronRequire("fs-extra");

class ActionDispatcher {

  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  findData(textSearch) {
    const { dispatch } = this;
    function done(err, docs) {
      dispatch({
        type: "FIND-LEAF",
        leaves: docs
      });
    }
    if (!textSearch) {
      dataStore.find({}).sort({ name: 1 }).exec(done);
    } else {
      dataStore.find({ name: new RegExp(textSearch, 'i') }).sort({ name: 1 }).exec(done);
    }
  }

  insert(leaf, sourcePath) {
    const dispatch = this.dispatch;
    function insertToStore() {
      dataStore.insert(leaf, function (err, newDoc) {
        dispatch({
          type: "INSERT-LEAF"
        });
      });
    }

    if (leaf.type == "image") {
      let localPath = Helper.getImagePath(leaf.value);
      if (sourcePath.indexOf('http') == 0) {
        //download image;
        fs.createFile(localPath, function () {
          let localImage = fs.createWriteStream(localPath);
          // dispatch after downloaded image;
          localImage.on('finish', function () {
            insertToStore();
          });

          // start download image;
          https.get(sourcePath, function (response) {
            response.pipe(localImage);
          });
        });
      } else {
        fs.copy(sourcePath, localPath, function (err) {
          if (err) return console.error(err);
          insertToStore();
        });
      }
    } else {
      insertToStore();
    }
  }

  update(leaf, sourcePath) {
    const dispatch = this.dispatch;
    let localPath = Helper.getImagePath(leaf.value);
    function insertToStore() {
      dataStore.update({ _id: leaf._id }, { $set: leaf }, {}, function (err) {
        dispatch({
          type: "UPDATE-LEAF"
        });
      });
    }

    if (leaf.type == "image") {
      // only update with new image;
      if (sourcePath.indexOf('http') == 0) {
        //download image;
        fs.createFile(localPath, function () {
          let localImage = fs.createWriteStream(localPath);
          // dispatch after downloaded image;
          localImage.on('finish', function () {
            insertToStore();
          });

          // start download image;
          https.get(sourcePath, function (response) {
            response.pipe(localImage);
          });
        });
      } else if (sourcePath != localPath) {
        fs.copy(sourcePath, localPath, function (err) {
          if (err) return console.error(err);
          insertToStore();
        });
      }
    } else {
      insertToStore();
      // remove exists value;
      fs.remove(localPath, function (err) {
        if (err) return console.error(err);
      });
    }
  }

  remove(leaf) {
    const dispatch = this.dispatch;
    if (leaf.type === "image") {
      let localPath = Helper.getImagePath(leaf.value);
      fs.remove(localPath, function (err) {
        if (err) return console.error(err);
        console.log("remove done!");
      });
    }
    dataStore.remove({ _id: leaf._id }, {}, function (err) {
      dispatch({
        type: "REMOVE-LEAF"
      });
    });
  }
}

export default ActionDispatcher;
