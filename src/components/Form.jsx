import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useCreateCard from '../hooks/useCreateCard'
import useUpdate from '../hooks/useUpdate'

const Form = ({ getAllUsers, handleSubmit, register, reset, objUpdate, setObjUpdate, click }) => {

   const newUser = useCreateCard
   const updateUserById = useUpdate

   const defaultValuesForm = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
   }

   const submit = data => {
      if (objUpdate !== undefined) {
         console.log('update')
         updateUserById(objUpdate.id, data, getAllUsers, click)
         reset(defaultValuesForm)

      } else {
         console.log('Como me vio pues')
         newUser(data, getAllUsers)
         click()
      }
      reset(defaultValuesForm)


   }

   return (


      <div className='box-form flex'>
         <div className="new-form flex">
            <div className="closeBtn">
               <a onClick={click} href="#"><i className='bx bx-x'></i></a>
            </div>
            <form className='form' onSubmit={handleSubmit(submit)}>
               <div className="form__title"><h2>Welcome</h2></div>
               <div className="form__input-container ic1">
                  <input id="firstname" className="form__input" type="text"  {...register('first_name')} />
                  <div className="form__cut"></div>
                  <label htmlFor="firstname" className="form__placeholder">First name</label>
               </div>
               <div className="form__input-container ic2">
                  <input id="lastname" className="form__input" type="text" {...register('last_name')} />
                  <div className="form__cut"></div>
                  <label htmlFor="lastname" className="form__placeholder">Last name</label>
               </div>
               <div className="form__input-container ic2">
                  <input id="email" className="form__input" type="email" {...register('email')} />
                  <div className="form__cut form__cut--short"></div>
                  <label htmlFor="email" className="form__placeholder">Email</label>
               </div>
               <div className="form__input-container ic2">
                  <input id="password" className="form__input" type="password" {...register('password')} />
                  <div className="form__cut "></div>
                  <label htmlFor="password" className="form__placeholder">Password</label>
               </div>
               <div className="form__input-container ic2">
                  <input id="date" className="form__input" type="date" {...register('birthday')} />
                  <div className="form__cut"></div>
                  <label htmlFor="date" className="form__placeholder">Birthday</label>
               </div>
               <button className="form__submit">Submit</button>
            </form >
         </div>


      </div>
   )
}

export default Form
