import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import BtnForm from './components/BtnForm'
import CardUser from './components/CardUser'
import useUsers from './hooks/useUsers'



URL = 'https://users-crud1.herokuapp.com/users/'
const CrudUsers = () => {
   const { handleSubmit, register, reset } = useForm()
   const [objUpdate, setObjUpdate] = useState()
   const [clickBtnUser, setClicBtnUser] = useState(false)


   const click = () => {
      if (!clickBtnUser) {
         setClicBtnUser(true)
      } else {
         setClicBtnUser(false)
         const obj = {
            // Email: '',
            // Password: '',
            // First_name: '',
            // Last_name: '',
            // Birthday: ''
         }
         reset(obj)


      }
   }


   const users = useUsers()

   return (
      <div className='CrudUsers flex'>

         <BtnForm
            URL={URL}
            getAllUsers={users.getAllUsers}
            handleSubmit={handleSubmit}
            register={register}
            reset={reset}
            objUpdate={objUpdate}
            setObjUpdate={setObjUpdate}
            clickBtnUser={clickBtnUser}
            click={click}
            setClicBtnUser={setClicBtnUser}
         />

         <div className="all-cards flex">
            {
               users.users?.map(user => (
                  <CardUser
                     URL={URL}
                     user={user}
                     key={user.id}
                     getAllUsers={users.getAllUsers}
                     click={click}
                     reset={reset}
                     setObjUpdate={setObjUpdate}
                  />
               ))
            }
         </div>

      </div>
   )
}

export default CrudUsers
