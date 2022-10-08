import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useUsers = () => {
    const [users, setUsers] = useState()
    const getAllUsers = () => {
        axios.get(URL)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return {users, getAllUsers, setUsers}
}

export default useUsers