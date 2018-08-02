export default function(state = [], action) {
  switch (action.type) {
    case "GET_PLANET":
      return [...state, action.payload];
      default:
      return state;
  }
}
