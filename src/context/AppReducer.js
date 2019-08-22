export default (state, action) => {
  switch (action.type) {
    case "MENU_OPEN":
      return { isOpen: action.payload };
    default:
      return state;
  }
};
