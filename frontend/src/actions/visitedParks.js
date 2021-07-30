export const fetchVisitedParks = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/visited_parks")
      .then(resp => resp.json())
      .then(visitedParks => {
        dispatch({
          type: "GET_VISITED_PARKS",
          payload: visitedParks
        })
        console.log("from fetchVisitedParks", visitedParks)
      })
  }
}

export const fetchPostVisitedParks = (park) => {
  return (dispatch) => {
    fetch('http://localhost:3001/visited_parks', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
          body: JSON.stringify({
            visited_parks: park
          }),
      })
      .then(resp => resp.json())
      .then(visitedParks => {
        dispatch({
          type: "POST_VISITED_PARKS",
          payload: visitedParks
        })
        console.log("from fetchPostVisitedParks", visitedParks)
      })
  }
}

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