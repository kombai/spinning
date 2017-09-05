let Datastore = electronRequire('nedb');
import Helper from '../../../../helper';

let treeData = new Datastore({
    autoload: true,
    filename: Helper.storePath + '/data-store/tree-data.db'
});

export default treeData;
