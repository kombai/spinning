import treeStore from '../../tree/connect/store-data';
import twigStore from '../../twig/connect/store-data';
import leafStore from '../../leaf/connect/store-data';
import rootStore from './store-data';
const fs = electronRequire('fs-extra');
import Helper from '../../../../helper';

let rootData = {};
let getGUID = Helper.getGUID;

function init() {

    rootStore.findOne({}, function(err, docs) {
        if (docs !== null) {
            rootData = docs;
        } else {
            rootData = {
                name: 'New Tree',
                _id: getGUID(),
                value: {
                    nemesis: [],
                    faculties: [],
                    properties: []
                }
            };

            rootStore.insert(rootData);
        }
    });
};

init();

const rootAction = {

    getRootData() {
        rootData._id = getGUID();
        return JSON.parse(JSON.stringify(rootData));
    },

    insertLeaf(leaf) {
        leafStore.find({_id: leaf._id}, function(err, docs) {
            if (docs.length == 0) {
                leafStore.insert(leaf);
            }
        });
    },

    insertTwig(twig) {
        twigStore.find({_id: twig._id}, function(err, docs) {
            if (docs.length == 0) {
                twigStore.insert(twig);
            }
        });
    },

    resetStoreData(callback) {
        treeStore.remove({}, { multi: true }, function (err, numRemoved) {});
        rootStore.remove({}, { multi: true }, function (err, numRemoved) {});
        twigStore.remove({}, { multi: true }, function (err, numRemoved) {});

        fs.remove(Helper.photoStore, function() {
            leafStore.remove({}, { multi: true }, function (err, numRemoved) {
                init();
                callback && callback();
            });
        });
    },
};

export default rootAction;
