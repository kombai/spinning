
import Helper from '../../../../helper';
import dataStore from './store-data';

class ActionDispatcher {

  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  findData(textSearch) {
    const { dispatch } = this;
    function done(err, docs) {
      dispatch({
        type: "FIND-TREE",
        trees: docs
      });
    }
    if (!textSearch) {
      dataStore.find({}).sort({ name: 1 }).exec(done);
    } else {
      dataStore.find({ name: new RegExp(textSearch, 'i') }).sort({ name: 1 }).exec(done);
    }
  }

  insert(tree) {
    const dispatch = this.dispatch;
    dataStore.insert(tree, function (err, newDoc) {
      dispatch({
        type: "INSERT-TREE"
      });
    });
  }

  update(tree) {
    const dispatch = this.dispatch;
    dataStore.update({ _id: tree._id }, { $set: tree }, {}, function (err) {
      dispatch({
        type: "UPDATE-TREE"
      });
    });
  }

  remove(tree) {
    const dispatch = this.dispatch;
    dataStore.remove({ _id: tree._id }, {}, function (err) {
      dispatch({
        type: "REMOVE-TREE"
      });
    });
  }
}

export default ActionDispatcher;
