export default (state, action) => {
  switch (action.type) {
    case "CHANGE_TEAM":
      let tempState = action.payload;
      return tempState;
    case "ADD_PLAYER":
      let tempAddArray = [...state.players, action.payload];
      return { ...state, players: tempAddArray };
    case "REMOVE_PLAYER":
      return {
        ...state,
        players: state.players.filter(value => value.id !== action.payload)
      };
    case "ROTATE_PLAYERS":
      let tempArray = [...state.players];
      tempArray.unshift(tempArray.pop());
      return { ...state, players: tempArray };
    case "REORDER_PLAYER":
      let tempReorderArray = action.payload;
      return { ...state, players: tempReorderArray };
    case "ASSESS_LINEUP":
      return [...state];
    case "GET_PLAYERS":
      return state.players;
    default:
      return state;
  }
};
