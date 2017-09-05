let leafState = {
  actionType: '',
  leaves: []
};

function reducer(state = leafState, action) {
  switch (action.type) {
    case 'FIND-LEAF':
      return Object.assign({}, state, {
        actionType: action.type,
        leaves: action.leaves
      });
    case 'INSERT-LEAF':
      return Object.assign({}, state, {
        actionType: action.type
      });
    case 'UPDATE-LEAF':
      return Object.assign({}, state, {
        actionType: action.type
      });
    case 'REMOVE-LEAF':
      return Object.assign({}, state, {
        actionType: action.type
      });
    default:
      return state
  }
}

export default reducer
