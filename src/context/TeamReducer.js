export default (state, action) => {
  switch (action.type) {
    case "CHANGE_TEAM":
      let tempState = action.payload;
      return tempState;
    case "ADD_PLAYER":
      if (state.players.length > 5) {
        let tempAddArray = [...state.playersOnBench, action.payload];
        return { ...state, playersOnBench: tempAddArray };
      }
      let tempAddArray = [...state.players, action.payload];
      return { ...state, players: tempAddArray };
    case "REMOVE_PLAYER":
      return {
        ...state,
        players: state.players.filter(value => value.id !== action.payload)
      };
    case "REMOVE_BENCH_PLAYER":
      return {
        ...state,
        playersOnBench: state.playersOnBench.filter(
          value => value.id !== action.payload
        )
      };
    case "ROTATE_PLAYERS":
      let tempArray = [...state.players];
      tempArray.unshift(tempArray.pop());
      const rotateOut = tempArray[3];
      if (rotateOut.swappable && state.playersOnBench.length > 0) {
        const tempBenchArray = [...state.playersOnBench];
        const rotateIn = tempBenchArray[0];
        rotateIn.position = rotateOut.position;
        tempArray[3] = rotateIn;
        tempBenchArray.push(rotateOut);
        tempBenchArray.shift();
        return {
          ...state,
          players: tempArray,
          playersOnBench: tempBenchArray
        };
      }
      return {
        ...state,
        players: tempArray
      };

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
