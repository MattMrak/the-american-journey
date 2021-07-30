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