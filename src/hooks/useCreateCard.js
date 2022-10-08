import React from 'react'
import axios from 'axios'
const URL = 'https://users-crud1.herokuapp.com/users/'
const useCreateCard = (data, getAllUsers) => {

    console.log('en el axios')
    console.log(data)

    axios.post(URL, data)
        .then(res => {
            console.log('se logro')
            console.log(res.data)
            getAllUsers()
    
            
        })
        .catch(err => console.log(err))
}

export default useCreateCard