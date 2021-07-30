export const fetchDeleteVisitedPark = (id) => {
    return (dispatch) => {
      fetch(`http://localhost:3001/visited_parks/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
            body: JSON.stringify({
                id: id
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