const initialState = {
    allParks: [],
}

const allParksReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_PARKS":
            return {
                ...state,
                allParks: [...action.payload]
            }
            default: 
            return state
    }
}

export default allParksReducer;