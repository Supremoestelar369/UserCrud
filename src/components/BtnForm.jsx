import React, { useState } from 'react'
import newUserIcon from '../assets/img/svg/newUser.svg'
import Form from './Form'



const BtnForm = ({ getAllUsers, handleSubmit, register, reset, objUpdate, setObjUpdate, clickBtnUser, click, showForm }) => {


    return (

        <div div className="icon-form flex" >
            <a  onClick={click}>
                <img className='icon-form__img' src={newUserIcon} alt="new user" />
            </a>
            {
                clickBtnUser &&
                <Form
                    getAllUsers={getAllUsers}
                    handleSubmit={handleSubmit}
                    register={register}
                    reset={reset}
                    objUpdate={objUpdate}
                    setObjUpdate={setObjUpdate}
                    click={click}

                />
            }
        </div>

    )
}

export default BtnFor
