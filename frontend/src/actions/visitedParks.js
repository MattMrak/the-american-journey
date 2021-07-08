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
              }
      })
        .then(resp => resp.json())
        .then(visited => {
        dispatch(visited)
      })
    }
}