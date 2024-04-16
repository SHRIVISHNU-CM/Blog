import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../Context/UserContext'
import axios from 'axios'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import Blog from './Blogs/Blog'

function Myblogs() {
    const { ID } = useContext(LoginContext)
    const [value, setvalue] = useState([])
    const [error, setError] = useState(null)
    const GetById = `http://localhost:3001/api/find/${ID}`

    useEffect(() => {
        axios.get(GetById)
            .then((res) => {
                console.log(res.data.notes)
                setvalue(res.data.notes)
            })
            .catch((e) => {
                setError(e)
            })
    }, [])
    return (
        <>
            <NavBar />
           
            {error? <div className='card justify-center'>
                        <div className='card-body'>
                            <h1 className='card-title'>Error</h1>
                            <Link to={'/'} className='btn text-white bg-gray-500 w-36'>Go To Login</Link>

                        </div>

                    </div> : (
                    value.map((el, i) => {
                        return (
                            <Blog props ={el}/>
                            
                        )
                    })
                )
            }
        </>
    )
}

export default Myblogs