export const fetchAllParks = () => {
  return (function f(dispatch) {
    fetch('http://localhost:3001/all_parks')
      .then(resp => resp.json())
      .then(allParks => {
        dispatch({ 
          type: "GET_PARKS",
          payload: allParks
        })
        console.log("from fetchAllParks", allParks)
      })
  })
}


// export const fetchAllParks = () => {
//   return (dispatch) => {
//     fetch('hhttps://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=bMLSBoFZh0Rk0EwqA7kh58xcN4Qod0MbhFbvcgm8')
//       .then(resp => resp.json())
//       .then(allParks => {
//         dispatch({
//           type: "GET_PARKS",
//           payload: allParks
//         })
//         console.log("from fetchAllParks", allParks)
//       })
//   }
// }