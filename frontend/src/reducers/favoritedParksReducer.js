const initialState = {
  favoritedParks: [],
}

const favoritedParksReducer = (state = initialState, action) => {
  switch(action.type){
      case "GET_FAVORITED_PARKS":
          return {
              ...state,
              favoritedParks: [...action.payload]
          }
          default: 
          return state
  }
}

export default favoritedParksReducer;