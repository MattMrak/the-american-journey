const initialState = {
    visitedParks: [],
  }
  
  const visitedParksReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_VISITED_PARKS": {
            return {
                ...state,
                visitedParks: [...action.payload]
            }}
        case "POST_VISITED_PARKS": {
            return {
                ...state,
                visitedParks: [action.payload]
          }}
        case "DELETE_VISITED_PARK": {
          return {
                ...state,
                visitedParks: [...state.visitedParks.filter(park => park.id !== action.payload.id)]
          }}
            default: 
            return state
    }
  }
  
  export default visitedParksReducer;
