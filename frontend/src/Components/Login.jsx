import React, { useContext, useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"
import { LoginContext } from '../Context/UserContext';
function Login() {
    const navigate = useNavigate()
    const { name, setname, SetID  } = useContext(LoginContext)
    const [ errorMsg , SeterrorMeg] =useState('')
    const HandleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/login', { name })
            .then((res) => {
                
                    console.log(res);
                    SetID(res.data._id);
                    setname(res.data.name)
                    navigate('/Home');
            })
            .catch((e) => {
                SeterrorMeg("Incoorect Name .Try Again")
                console.log(e.message)})
    }

    return (
        <>
            <div className='flex justify-center items-center h-[100vh]' >
                <div className='card shadow-xl bg-base-100 w-96 max-w-xl'>
                    <div className='card-body'>
                        <h2 className='card-title'>Login</h2>
                        <form onSubmit={HandleLogin}>
                            <div>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={e => setname(e.target.value)}
                                    placeholder='Enter Name'
                                    className='input input-bordered w-full max-w-xs'
                                />
                                {errorMsg && <p className='text-center text-warning'>{errorMsg}</p>}
                            </div>
                            <div className='card-actions justify-center py-3'>
                                <button type='submit' className='btn btn-success'>Login</button>
                            </div>
                            <div className='card-actions justify-center'>
                                <h2>Don't have an account? <Link className='text-warning' to={'/signup'}> Signup</Link></h2>
                            </div>
                        </form>

                    </div>


                </div>
            </div>

        </>
    )
}

export default Login