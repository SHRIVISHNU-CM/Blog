import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../Context/UserContext'
import axios from 'axios'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import Blog from './Blogs/Blog'

function Myblogs() {
    const { ID, setlen } = useContext(LoginContext)
    const [value, setvalue] = useState([])
    const [error, setError] = useState(null)
    const [isloading, setloading] = useState(true)
    const GetById = `http://localhost:3001/api/find/${ID}`


    const fetchData = () => {
        axios.get(GetById)
            .then((res) => {
                setlen(res.data.notes.length)
                console.log(res.data.notes.length)
                setvalue(res.data.notes)
            })
            .catch((e) => {
                setError(e)
            })
    }
    const HandleDrop = () => {
        fetchData()
    }
    useEffect(() => {
        const timmer = setTimeout(() => {
            setloading(false)
            fetchData()

        },1000)

        return ()=>clearTimeout(timmer)
    }, [ID,isloading])

    return (
        <>
            <NavBar />
            {
                isloading? <div className='skeleton card m-3 h-[300px]'></div>:
            

            error ? <div className='card justify-center'>
                <div className='card-body'>
                    <h1 className='card-title'>Error</h1>
                    <Link to={'/'} className='btn text-white bg-gray-500 w-36'>Go To Login</Link>

                </div>

            </div> : (
                value.map((el) => {
                    return (
                        <Blog props={el} Ondelete={HandleDrop} />

                    )
                })
            )
            }
        </>
    )
}

export default Myblogs