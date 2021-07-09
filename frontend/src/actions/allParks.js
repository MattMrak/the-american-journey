// export const fetchAllParks = (allParks) => {
//   console.log("from fetchAllParks", allParks)
//   return (dispatch) => {
//     fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=bMLSBoFZh0Rk0EwqA7kh58xcN4Qod0MbhFbvcgm8')
//       .then(resp => resp.json())
//       .then(allParks => {
//         dispatch({
//           type: "ADD_PARKS",
//           payload: allParks
//         })
//       })
//   }
// }

export const fetchAllParks = (allParks) => {
  console.log("from fetchAllParks", allParks)
  return (dispatch) => {
    fetch('http://localhost:3001/all_parks')
      .then(resp => resp.json())
      .then(allParks => {
        dispatch({
          type: "ADD_PARKS",
          payload: allParks
        })
      })
  }
}

  
export const addAllParks = (newParks) => {
    return {
        type: "ADD_PARKS",
        payload: newParks
      }
}