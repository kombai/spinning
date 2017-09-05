let Datastore = electronRequire('nedb');
import Helper from '../../../../helper';

let rootData = new Datastore({
    autoload: true,
    filename: Helper.storePath + '/data-store/root-data.db'
});

export default rootData;
