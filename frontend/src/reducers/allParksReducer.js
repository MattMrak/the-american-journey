const initialState = {
    allParks: [],
}

const allParksReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_PARKS":
            return {
                ...state,
                // allParks: [...state.allParks, action.payload]
                allParks: [action.payload]
            }
            default: 
            return state
    }
}

export default allParksReducer;