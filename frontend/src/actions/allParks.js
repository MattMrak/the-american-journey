export const fetchAllParks = () => {
  return (dispatch) => {
    fetch("https://developer.nps.gov/api/v1/parks?&api_key=jMY7O71tKT8fagJ4bcyhJ2S08pxgKQu25rNS2okA")
      .then(resp => resp.json())
      .then(allParks => {
        dispatch({
          type: "GET_PARKS",
          payload: allParks
        })
        console.log("from fetchAllParks", allParks)
      })
  }
}