
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'


const BASE_URL="https://users-crud.academlo.tech/"
function App() {
  
  const [users, setUsers] = useState()
  const [userUpdate, setUserUpdate] = useState()
  const [isShowModal, setIsShowModal] = useState(false)
  
//Función para obtener todos los usuarios
 const getAllUsers=()=>{
  const URL=`${BASE_URL}users/`
  axios.get(URL)
  .then((res)=>setUsers(res.data))
  .catch((err)=>console.log(err))
}

//Funcion para crear usuario

const createUser=(data)=>{
  const URL=`${BASE_URL}users/`
  axios.post(URL,data)
  .then((res)=>{
  console.log(res.data)
    getAllUsers()
    handleShowModal()
  })
  .catch((err)=>console.log(err))
}

//Funcion para eliminar usuario

const deleteUser=(id)=>{
  const URL=`${BASE_URL}users/${id}/`
  axios.delete(URL)
  .then((res)=>{
    console.log(res.data)
    getAllUsers()
  })
  .catch((err)=>console.log(err))
}


 useEffect(() => {
   getAllUsers()
 }, [])

 //Función para actualizar datos
 const editUser=(id, data)=>{
  const URL=`${BASE_URL}users/${id}/`
  axios.patch(URL,data)
  .then((res)=>{
    getAllUsers()
    setUserUpdate()
    handleShowModal()
  })
  .catch((err)=>console.log(err))
 }
 
//Funcion para manejar el modal
 const handleShowModal=()=>{
  setIsShowModal(!isShowModal)
 }

 const handleNewUserButton=()=>{
  setUserUpdate()
  handleShowModal()
 }

  return (
    <div className="App">
      <div className='header-container'>
        <h1>CRUD   USERS</h1>
        <button onClick={handleNewUserButton} className='header-btn'> <span><i className='bx bx-plus'></i> Create New User</span> </button>
      </div>
      <FormUsers 
      isShowModal={isShowModal}
      userUpdate={userUpdate}
      createUser={createUser}
      editUser={editUser}
      handleShowModal={handleShowModal}/>
      

      <div className='users-container'>
         {
        users?.map((user)=>
        <UserCard 
        setUserUpdate={setUserUpdate}
        deleteUser={deleteUser} 
        key={user.id} 
        user={user}
        handleShowModal={handleShowModal}/>)
      }
      </div>
     
    </div>
  )
}

export default App
