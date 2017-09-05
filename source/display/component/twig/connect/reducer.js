let twigState = {
  actionType: '',
  twigs: []
};

function reducer(state = twigState, action) {
  switch (action.type) {
    case 'FIND-TWIG':
      return Object.assign({}, state, {
        actionType: action.type,
        twigs: action.twigs
      });
    case 'INSERT-TWIG':
      return Object.assign({}, state, {
        actionType: action.type
      });
    case 'UPDATE-TWIG':
      return Object.assign({}, state, {
        actionType: action.type
      });
    case 'REMOVE-TWIG':
      return Object.assign({}, state, {
        actionType: action.type
      });
    default:
      return state
  }
}

export default reducer
