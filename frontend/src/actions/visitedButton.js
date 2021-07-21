export const fetchPostVisitedParks = () => {
    return (dispatch) => {
      fetch('http://localhost:3001/visited_parks', {
        method: 'POST',
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
            type: "POST_VISITED_PARKS",
            payload: visitedParks
          })
          console.log("from fetchPostVisitedParks", visitedParks)
        })
    }
}