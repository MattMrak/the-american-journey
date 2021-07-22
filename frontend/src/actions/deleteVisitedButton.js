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