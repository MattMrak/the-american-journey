export const fetchFavoritedToBE = (favorite) => {
    console.log("from fetchFavoritedToBE", favorite)
    return (dispatch) => {
      fetch('http://localhost:3001/favorited_parks',{
              method:'POST',
              headers: { 
                  'Content-type': 'application/json',
                  'accept': 'application/json'
              },
            body: JSON.stringify({
                favorite: favorite
              })
      })
        .then(resp => resp.json())
        .then(favorite => {
        dispatch(addFavorite(favorite))
      })
    }
}
  
export const addFavorite = (newFavorite) => {
    return {
        type: "ADD_FAVORITE",
        payload: newFavorite
      }
}
  
export const fetchFavoritedToFE = (favorite) => {
    console.log("from fetchMapToBE", favorite)
    return (dispatch) => {
      fetch('http://localhost:3001/favorited_parks',{
              method:'GET',
              headers: { 
                  'Content-type': 'application/json',
                  'accept': 'application/json'
              }
      })
        .then(resp => resp.json())
        .then(favorite => {
        dispatch(favorite)
      })
    }
}