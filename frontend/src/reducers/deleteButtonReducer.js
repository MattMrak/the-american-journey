const initialState = {
    visitedParks: [],
    favoritedParks: []
}

const deleteButtonReducer = (state = initialState, action) => {
    switch(action.type){
        case "DELETE_VISITED_PARK":
            return {
                ...state,
                visitedParks: [state.visitedParks.filter(park => park !== action.payload)]
            }
        case "DELETE_FAVORITED_PARK":
            return {
                ...state,
                favoritedParks: [state.favoritedParks.filter(park => park !== action.payload)]
            }
        default: 
        return state
    }
}

export default deleteButtonReducer;