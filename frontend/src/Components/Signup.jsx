import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { LoginContext } from '../Context/UserContext';
function Signup() {
  const { name, setname } = useContext(LoginContext)
  const navigate = useNavigate()
  const api = "http://localhost:3001/api/create"


  const HandleSubmit = (e) => {
    e.preventDefault()
    axios.post(api, { name }, { withCredentials: true })
      .then((res) => {
        console.log(res)
        navigate('/')
        setname('')

      })
      .catch((e) => console.log(e))
  }


  return (
    <>
      <div className='flex justify-center items-center h-[100vh]'>
        <div className='card shadow-xl bg-base-100 w-96'>
          <div className='card-body'>
            <h2 className='card-title'>Signup</h2>
            <form onSubmit={HandleSubmit}>
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={e => setname(e.target.value)}
                  placeholder='Enter Name'
                  className='input input-bordered w-full max-w-xs'
                />

              </div>
              <div className='card-actions justify-center py-3'>
                <button type='submit' className='btn btn-success' >Signup</button>
              </div>
              <div className='card-actions justify-center'>
                <h2>Already have an account? <Link className='text-warning' to={'/'}> Login</Link></h2>
              </div>
            </form>

          </div>


        </div>
      </div>

    </>
  )
}

export default Signup