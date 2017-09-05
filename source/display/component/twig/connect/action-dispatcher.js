import Helper from '../../../../helper';
import dataStore from './store-data';

class ActionDispatcher {

  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  findData(textSearch, byType) {
    const { dispatch } = this;
    function done(err, docs) {
      dispatch({
        type: "FIND-TWIG",
        twigs: docs
      });
    }

    if (!textSearch) {
      dataStore.find({}).sort({ name: 1 }).exec(done);
    } else {
      if (byType == true) {
        dataStore.find({ type: textSearch }).sort({ name: 1 }).exec(done);
      } else {
        dataStore.find({ name: new RegExp(textSearch, 'i') }).sort({ name: 1 }).exec(done);
      }
    }
  }

  insert(twig) {
    const dispatch = this.dispatch;
    dataStore.insert(twig, function (err) {
      dispatch({
        type: "INSERT-TWIG"
      });
    });
  }

  update(twig) {
    const dispatch = this.dispatch;
    dataStore.findOne({ _id: twig._id }, function (err, docs) {
      if (docs === null) {
        dataStore.insert(twig, function (err) {
          dispatch({
            type: "UPDATE-TWIG"
          });
        });
      } else {
        dataStore.update({ _id: twig._id }, { $set: twig }, {}, function (err) {
          dispatch({
            type: "UPDATE-TWIG"
          });
        });
      }
    });
  }

  remove(twig) {
    const dispatch = this.dispatch;
    dataStore.remove({ _id: twig._id }, {}, function (err) {
      dispatch({
        type: "REMOVE-TWIG"
      });
    });
  }
}

export default ActionDispatcher;
