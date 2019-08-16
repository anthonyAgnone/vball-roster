export default (state, action) => {
  switch (action.type) {
    case "MENU_OPEN":
      console.log(action.payload)
      return {isOpen: action.payload};
    default:
      return state;
  }
};
