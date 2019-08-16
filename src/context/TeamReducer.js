export default (state, action) => {
  switch (action.type) {
    case "CHANGE_TEAM":
      return [...state, { name: action.payload }];
    case "ADD_PLAYER":
      let tempAddArray = [...state.players, action.payload];
      return { ...state, players: tempAddArray };
    case "REMOVE_PLAYER":
      return {
        ...state,
        players: state.players.filter(value => value.id !== action.payload)
      };
    case "ROTATE_PLAYERS":
      return [state];
    case "REORDER_PLAYER":
      let tempReorderArray = [...state.players];
      return { ...state, players: tempReorderArray };
    case "ASSESS_LINEUP":
      return [...state];
    case "GET_PLAYERS":
      return state.players;
    default:
      return state;
  }
};
