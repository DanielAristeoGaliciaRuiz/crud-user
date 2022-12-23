import React from 'react'

const UserCard = ({user,deleteUser,setUserUpdate,handleShowModal}) => {


  const handleUserUpdate=()=>{
    setUserUpdate(user)
    handleShowModal()
  }

  return (
    <article className='user-card-container'>
      <div className='user-icon-container'><i class='user-icon bx bxs-user-circle'></i></div>
            <h2 className='user-tittle'>{`${user.first_name} ${user.last_name}`}</h2>
            <ul className='user-list'>
                <li className='user-item'><span>Email:</span>{user.email}</li>
                <li className='user-item'> <span><i className='bx bx-gift'></i> Birthday:</span>{user.birthday}</li>
            </ul>
          <div className='user-btn-container'>
             <button className='user-btn' onClick={()=>
              deleteUser(user.id)} >
            {/* <i className='bx bx-trash'></i> */}Delete
            </button>
            <button className='user-btn' onClick={handleUserUpdate}>
            {/* <i className='bx bx-pencil'></i> */}Update
            </button>
          </div>
    </article>
  )
}

export default UserCard