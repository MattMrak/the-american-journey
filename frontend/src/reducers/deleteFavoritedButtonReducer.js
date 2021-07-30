const initialState = {
    favoritedParks: []
}

const deleteFavoritedButtonReducer = (state = initialState, action) => {
    switch(action.type){
        case "DELETE_FAVORITED_PARK":
            return {
                ...state,
                favoritedParks: [state.favoritedParks.filter(park => park.id !== action.payload.id)]
            }
        default: 
        return state
    }
}

export default deleteFavoritedButtonReducer;