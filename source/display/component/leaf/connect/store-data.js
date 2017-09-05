let Datastore = electronRequire('nedb');
import Helper from '../../../../helper';

let leafData = new Datastore({
    autoload: true,
    filename: Helper.storePath + '/data-store/leaf-data.db'
});

export default leafData;
