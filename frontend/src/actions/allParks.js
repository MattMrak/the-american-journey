export const fetchAllParks = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/all_parks")
      .then(resp => resp.json())
      .then(allParks => {
        dispatch({
          type: "GET_PARKS",
          payload: allParks
        })
        console.log("from fetchFavoritedParks", allParks)
      })
  }
}