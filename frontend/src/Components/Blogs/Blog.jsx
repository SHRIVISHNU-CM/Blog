import React, { useEffect, useState } from 'react'
import HtmlParser from 'react-html-parser'
import axios from 'axios'
import { Link,useNavigate } from "react-router-dom"
function Blog({ props ,Ondelete}) {
  const [deleted , setDeleted] = useState(false)
  const navigate = useNavigate()
  const HandleDrop = () => {
    axios.delete(`http://localhost:3001/api/${props._id}`)
    .then((res)=>{
        setDeleted(true)
        Ondelete()
    })
    .catch((e)=>{
      console.log(e)
    })
  }
  
  return (
    <>
      <div key={props._id} className='card bg-base-300  mx-3 my-10'>
        <div className='card-body'>
          <div className='my-3'>
            <h1 className='card-title'>Title</h1>
            <h1>{props.sub}</h1>
          </div>

          <div className='my-3'>
            <h1 className='card-title'>Notes</h1>
            <h1>{HtmlParser(props.head)}</h1>

          </div>
          <div className='card-actions'>
            <Link to={`/edit/${props._id}`} className='btn btn-secondary w-20'>Edit</Link>
            <button className='btn btn-success w-20 text-white' onClick={HandleDrop}>drop</button>
          </div>

        </div>



      </div>
    </>
  )
}

export default Blog