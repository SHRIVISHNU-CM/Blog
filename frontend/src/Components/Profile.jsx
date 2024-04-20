import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../Context/UserContext'
import axios from 'axios'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

function Profile() {
    const { ID } = useContext(LoginContext)
    const [username, setUserName] = useState({
        _id : ID
    })
    const [Len, SetLen] = useState('')
    const [deleted, SetDeleted] = useState(false)
    const Getapi = `http://localhost:3001/api/find/${ID}`
    const updatePRofile = `http://localhost:3001/api/profileUpdate/${ID}`
    useEffect(() => {
        axios.get(Getapi)
            .then((res) => {
                console.log(res)
                setUserName({...username,name:res.data.name})
                console.log(res.data.notes.length)
                SetLen(res.data.notes.length)

            })

            .catch((e) => {
                SetDeleted(true)

            })
    }, [ID])
    const handleDelete = () => {
        axios.delete(`http://localhost:3001/api/user/${ID}`)
            .then((res) => {
                console.log(res, "deleted")

            })
    }
    const handleUpdate = (e)=>{
        e.preventDefault()
        axios.put(updatePRofile,{
            name:username.name
        })
        .then(()=>{
            console.log("updated")
        })
        
    }
    return (
        <>
            <NavBar />
            {
                deleted == true ? <div className='card justify-center'>
                    <div className='card-body'>
                        <h1 className='card-title'>Error</h1>
                        <Link to={'/'} className='btn text-white bg-gray-500 w-36'>Go To Login</Link>

                    </div>

                </div> :
                    <div className='flex justify-center my-5'>
                        <form className='card shadow-md w-9/12 ' onSubmit={handleUpdate}>
                            <h1 className='text-3xl my-2'>User's profile:</h1>
                            <div className='card-body'>
                                <h1 className='card-title'>UserName:</h1>
                                <input type='text'
                                    value={username.name}
                                    onChange={e=>setUserName({...username,name:e.target.value})}
                                 className='input input-bordered border-secondary'/>
                                <h1>Total blogs:</h1>
                                <h1>{Len}</h1>
                            </div>
                            <div className='card-actions justify-end m-2'>
                                <button type='submit'
                                    className='btn btn-secondary text-white'
                                >Update</button>
                                <button className='btn btn-active'
                                    onClick={handleDelete}
                                >
                                    DELETE
                                </button>
                            </div>
                        </form>
                    </div>
            }
        </>
    )
}

export default Profile