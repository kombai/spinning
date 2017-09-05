
let treeState = {
  actionType: '',
  trees: []
};

function reducer(state = treeState, action) {
  switch (action.type) {
    case 'FIND-TREE':
      return Object.assign({}, state, {
        actionType: action.type,
        trees: action.trees
      });
    case 'INSERT-TREE':
      return Object.assign({}, state, {
        actionType: action.type
      });
    case 'UPDATE-TREE':
      return Object.assign({}, state, {
        actionType: action.type
      });
    case 'REMOVE-TREE':
      return Object.assign({}, state, {
        actionType: action.type
      });
    default:
      return state
  }
}

export default reducer