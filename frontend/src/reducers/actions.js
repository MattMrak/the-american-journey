export const addUserBE = (email) => {
  console.log("from addUserBE", email)
  return (dispatch) => {
    fetch('http://localhost:3001/users',{
            method:'POST',
            headers: { 
                'Content-type': 'application/json',
                'accept': 'application/json'
            },
          body: JSON.stringify({
              email: email
            })
    })
      .then(resp => resp.json())
      .then(user => {
      dispatch(addUser(user))
    })
  }
}

export const addUser = (newUser) => {
  return {
      type: "ADD_USER",
      payload: newUser
    }
}
  
export const removeUser = () => {
  return {
    type: "CLEAR_USER"
  }
}

export const fetchAllParks = (allParks) => {
  console.log("from fetchAllParks", allParks)
  return (dispatch) => {
    fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=bMLSBoFZh0Rk0EwqA7kh58xcN4Qod0MbhFbvcgm8',{
            method:'GET',
            headers: { 
                'Content-type': 'application/json',
                'accept': 'application/json'
            },
    })
      .then(resp => resp.json())
      .then(allParks => {
      dispatch(addAllParks(allParks))
    })
  }
}

export const addAllParks = (newParks) => {
  return {
      type: "ADD_PARKS",
      payload: newParks
    }
}

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
            },
          body: JSON.stringify({
              favorite: favorite
            })
    })
      .then(resp => resp.json())
      .then(favorite => {
      dispatch(favorite)
    })
  }
}

export const fetchVisitedToBE = (visited) => {
  console.log("from fetchVisitedToBE", visited)
  return (dispatch) => {
    fetch('http://localhost:3001/visited_parks',{
            method:'POST',
            headers: { 
                'Content-type': 'application/json',
                'accept': 'application/json'
            },
          body: JSON.stringify({
              visited: visited
            })
    })
      .then(resp => resp.json())
      .then(visited => {
      dispatch(addVisited(visited))
    })
  }
}

export const addVisited = (newVisited) => {
  return {
      type: "ADD_VISITED",
      payload: newVisited
    }
}

export const fetchVisitedToFE = (visited) => {
  console.log("from fetchVisitedToBE", visited)
  return (dispatch) => {
    fetch('http://localhost:3001/visited_parks',{
            method:'GET',
            headers: { 
                'Content-type': 'application/json',
                'accept': 'application/json'
            },
          body: JSON.stringify({
              visited: visited
            })
    })
      .then(resp => resp.json())
      .then(visited => {
      dispatch(visited)
    })
  }
}