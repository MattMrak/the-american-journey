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