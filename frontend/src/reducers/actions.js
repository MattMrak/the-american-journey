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

export const fetchMap = (map) => {
  console.log("from fetchMap", map)
  return (dispatch) => {
    fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=bMLSBoFZh0Rk0EwqA7kh58xcN4Qod0MbhFbvcgm8',{
            method:'GET',
            headers: { 
                'Content-type': 'application/json',
                'accept': 'application/json'
            },
          body: JSON.stringify({
              map: map
            })
    })
      .then(resp => resp.json())
      .then(map => {
      dispatch(addMap(map))
    })
  }
}

export const addMap = (newMap) => {
  return {
      type: "ADD_MAP",
      payload: newMap
    }
}