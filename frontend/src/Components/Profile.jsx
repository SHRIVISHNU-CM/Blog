import React, { useContext } from 'react'
import { LoginContext } from '../Context/UserContext'

function Profile() {
    const{name,ID} = useContext(LoginContext)
  return (
    <>
        <div className='card shadow-md w-9/12' >
            <h1 className='text-3xl my-2'>User's profile:</h1>
            <div className='card-body'>
                <h1 className='card-title'>Name</h1>
                <h2>{name}</h2>
                <h1 className='card-title'>Total Number Of Blogs till now..</h1>
                <h2>{ID}</h2>
            </div>
            <div className='card-actions justify-end m-2'>
                <button 
                className='btn btn-warning text-white'
                >Logout</button>
            </div>
        </div>
        
    </>
  )
}

export default Profile