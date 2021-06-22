export default function manageFavoritedParks(state = {
  favortiedParks: [],
}, action) {
  switch(action.type){
    case "ADD_PARK":
      return {
        favoritedParks: state.favoritedParks.concat(action.payload)
      }
    default:
      return state
  }
};