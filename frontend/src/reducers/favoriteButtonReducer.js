const initialState = {
    favoritedParks: [],
}

const favoriteButtonReducer = (state = initialState, action) => {
    switch(action.type){
        case "POST_FAVORITED_PARKS":
            return {
                ...state,
                // favoritedParks: [...state.favoritedParks, action.payload]
                favoritedParks: [action.payload]
            }
            default: 
            return state
    }
}

export default favoriteButtonReducer;
