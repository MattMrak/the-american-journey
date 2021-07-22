const initialState = {
    visitedParks: []
}

const deleteVisitedButtonReducer = (state = initialState, action) => {
    switch(action.type){
        case "DELETE_VISITED_PARK":
            return {
                ...state,
                visitedParks: [state.visitedParks.filter(park => park !== action.payload)]
            }
        default: 
        return state
    }
}

export default deleteVisitedButtonReducer;