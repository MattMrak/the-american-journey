export const fetchDeleteVisitedPark = () => {
    return (dispatch) => {
      fetch('http://localhost:3001/visited_parks', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
            body: JSON.stringify({
                // visitedParks: ""
            }),
        })
        .then(resp => resp.json())
        .then(visitedParks => {
          dispatch({
            type: "DELETE_VISITED_PARK",
            payload: visitedParks
          })
          console.log("from fetchDeleteVisitedParks", visitedParks)
        })
    }
}

export const fetchDeleteFavPark = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/favorited_parks', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
            body: JSON.stringify({
                // favoritedParks: ""
            }),
        })
        .then(resp => resp.json())
        .then(favoritedParks => {
            dispatch({
            type: "DELETE_FAVORITED_PARK",
            payload: favoritedParks
            })
            console.log("from fetchDeleteFavParks", favoritedParks)
        })
    }
}