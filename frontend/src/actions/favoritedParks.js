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

export const fetchPostFavParks = (park) => {
  return (dispatch) => {
    fetch('http://localhost:3001/favorited_parks', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
          body: JSON.stringify({
            favorited_parks: park
          }),
      })
      .then(resp => resp.json())
      .then(favoritedParks => {
        dispatch({
          type: "POST_FAVORITED_PARKS",
          payload: favoritedParks
        })
        console.log("from fetchPostFavParks", favoritedParks)
      })
  }
}

export const fetchDeleteFavPark = (id) => {
  return (dispatch) => {
      fetch(`http://localhost:3001/favorited_parks/${id}`, {
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
      .then(favoritedParks => {
          dispatch({
          type: "DELETE_FAVORITED_PARK",
          payload: favoritedParks
          })
          console.log("from fetchDeleteFavParks", favoritedParks)
      })
  }
}