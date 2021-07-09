const initialState = {
    allParks: [],
}

const allParksReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_PARKS":
            // return state.concat(action.payload)
            return {
                ...state,
                allParks: [...state.allParks, action.payload]
            }
        default: 
            return state
    }
}

export default allParksReducer;