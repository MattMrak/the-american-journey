const initialState = {
  favoritedParks: []
}

const favoritedParksReducer = (state = initialState, action) => {
  switch(action.type){
      case "GET_FAVORITED_PARKS": {
          return {
              ...state,
              favoritedParks: [...action.payload]
          }}
      case "POST_FAVORITED_PARKS": {
          return {
            ...state,
            favoritedParks: [action.payload]
        }}
      case "DELETE_FAVORITED_PARK": {
          return {
              ...state,
              favoritedParks: [...state.favoritedParks.filter(park => park.id !== action.payload.id)]
        }}
          default: 
          return state
  }
}

export default favoritedParksReducer;