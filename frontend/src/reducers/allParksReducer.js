const initialState = {
    allParks: [],

}


const allParksReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_PARK":
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
