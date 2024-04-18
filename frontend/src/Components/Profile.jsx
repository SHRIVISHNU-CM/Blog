import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../Context/UserContext'
import axios from 'axios'
import NavBar from './NavBar'

function Profile() {
    const { ID } = useContext(LoginContext)
    const [ username , setUserName]  =useState('')
    const [Len ,SetLen] = useState('')
    const Getapi = `http://localhost:3001/api/find/${ID}`
    useEffect(()=>{
        axios.get(Getapi)
        .then((res)=>{
            console.log(res)
            setUserName(res.data.name)
            console.log(res.data.notes.length)
            SetLen(res.data.notes.length)
            
        })
    },[])
    const handleDelete = () => {
        axios.delete(`http://localhost:3001/api/user/${ID}`)
            .then((res) => {
                console.log(res, "deletd")

            })
    }
    return (
        <>
            <NavBar />
            <div className='flex justify-center my-5'>
                <div className='card shadow-md w-9/12 '>
                    <h1 className='text-3xl my-2'>User's profile:</h1>
                    <div className='card-body'>
                        <h1 className='card-title'>Name:</h1>
                        <h2 className='card-title'>{username}</h2>
                        <h1>Total blogs</h1>
                        <h1>{Len}</h1>
                    </div>
                    <div className='card-actions justify-end m-2'>
                        <button
                            className='btn btn-warning text-white'
                        >Logout</button>
                        <button className='btn btn-active'
                            onClick={handleDelete}
                        >
                            DELETE
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Profile