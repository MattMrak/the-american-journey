export const fetchDeleteFavPark = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/favorited_parks/:id', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
            body: JSON.stringify({
                // favoritedParks: ""
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