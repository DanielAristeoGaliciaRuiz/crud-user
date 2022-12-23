import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValues={
    email:"",
    password:"",
    first_name:"",
    last_name:"",
    birthday:""
}

const FormUsers = ({createUser,userUpdate,editUser,isShowModal,handleShowModal}) => {

    const {handleSubmit,register,reset}=useForm()

    const submitForm=(data)=>{
        if(userUpdate){
            editUser(userUpdate.id,data)
        }else{
            createUser(data)
        }
        reset(defaultValues)
    }

    useEffect(() => {
        if(userUpdate){
            reset(userUpdate)
        }else{
            reset(defaultValues)
        }
    }, [userUpdate])
    
  

  return (
    < div className={`container-form ${isShowModal? "":"disable-form"} `}>
    <form className='form' onSubmit={handleSubmit(submitForm)} >
    <i onClick={handleShowModal} className='form-x bx bx-x'></i>
        <h2 className='form-tittle'>{userUpdate? "Edit User":"Create User"}</h2>
        <div className='form-div'>
            <label className='form-label' htmlFor="">Email</label>
            <input className='form-input' type="email" {...register("email")}/>
        </div>
        <div className="form-div">
            <label className='form-label' htmlFor="">Password</label>
            <input className='form-input' type="password" {...register("password")}/>
        </div>
        <div className='form-div'>
            <label className='form-label' htmlFor="">First Name</label>
            <input className='form-input' type="text" {...register("first_name")}/>
        </div>
        <div className='form-div'>
            <label className='form-label' htmlFor="">Last Name</label>
            <input className='form-input' type="text" {...register("last_name")}/>
        </div>
        <div className='form-div'>
            <label className='form-label' htmlFor="">Birthday</label>
            <input className='form-input' type="date" {...register("birthday")}/>
        </div>
        <button  className='form-btn'>{userUpdate? "Update User":"Add User"}</button>
    </form>
    </div>
  )
}

export default FormUsers