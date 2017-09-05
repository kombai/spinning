let Datastore = electronRequire('nedb');
import Helper from '../../../../helper';

let twigData = new Datastore({
    autoload: true,
    filename: Helper.storePath + '/data-store/twig-data.db'
});

export default twigData;
