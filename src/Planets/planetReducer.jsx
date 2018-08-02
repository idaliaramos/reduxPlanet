export default function(state = [], action) {
  switch (action.type) {
    case "GET_PLANET":
      return [{ name: "Jupiter" }, { name: "Venus" }, { name: "Mars" }];
    default:
      return state;
  }
}
