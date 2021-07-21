const initialState = {
    visitedParks: [],
  }
  
  const visitedParksReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_VISITED_PARKS":
            return {
                ...state,
                visitedParks: [...state.visitedParks, ...action.payload]
            }
            default: 
            return state
    }
  }
  
  export default visitedParksReducer;
