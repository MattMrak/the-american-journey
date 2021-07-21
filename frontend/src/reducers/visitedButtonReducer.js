const initialState = {
    visitedParks: [],
}

const visitedButtonReducer = (state = initialState, action) => {
    switch(action.type){
        case "POST_VISITED_PARKS":
            return {
                ...state,
                // visitedParks: [...state.visitedParks, action.payload]
                visitedParks: [action.payload]
            }
            default: 
            return state
    }
}

export default visitedButtonReducer;