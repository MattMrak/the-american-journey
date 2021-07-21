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