export const fetchFavoritedParks = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/favorited_parks")
      .then(resp => resp.json())
      .then(favoritedParks => {
        dispatch({
          type: "GET_FAVORITED_PARKS",
          payload: favoritedParks
        })
        console.log("from fetchFavoritedParks", favoritedParks)
      })
  }
}