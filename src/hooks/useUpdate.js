import axios from 'axios'
import React from 'react'
const URL = 'https://users-crud1.herokuapp.com/users/'

const useUpdate = ( id, data, getAllUsers, click) => {
    console.log('qui es update')
    axios.patch(`${URL}${id}/`, data)
        .then(res => {
            console.log(res.data)
            getAllUsers()
            click()

        })
        .catch(err => console.log(err))
}

export default useUpdate