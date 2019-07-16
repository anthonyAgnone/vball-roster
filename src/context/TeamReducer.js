export default (state, action) => {
  switch (action.type) {
    case "CHANGE_TEAM":
      return [...state, { name: action.payload }];
    case "ADD_PLAYER":
      console.log(action.payload);
      let tempAddArray = [...state.players, action.payload];
      return [...state, { players: tempAddArray }];
    case "REMOVE_PLAYER":
      return state.filter((_, index) => index !== action.payload);
    case "ROTATE_PLAYERS":
      return [...state];
    case "REORDER_PLAYER":
      let tempReorderArray = [...state.players];
      return [...state, { players: tempReorderArray }];
    case "ASSESS_LINEUP":
      return [...state];
    case "GET_PLAYERS":
      return state.players;
    default:
      return state;
  }
};
