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